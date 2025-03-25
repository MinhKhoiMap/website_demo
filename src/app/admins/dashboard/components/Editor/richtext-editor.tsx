"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";
import LinkExts from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import ImageExts from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
import Focus from "@tiptap/extension-focus";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import Youtube from "@tiptap/extension-youtube";

import Menubar from "./menubar";
import { Button } from "@/components/ui/button";
import { PanelRight, SaveIcon } from "lucide-react";

import "./editor_style.scss";
import { Tooltip } from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useSidebar } from "@/components/ui/sidebar";
import { toast } from "@/hooks/use-toast";
import processHTMLContent from "@/lib/html2md";
import { normalizeFile } from "@/lib/utils";

const allowedImageTypes = [
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

export default function RichtextEditor({
  children,
  content,
  categories,
  onSubmit,
}: {
  children?: Readonly<React.ReactNode>;
  content?: string;
  categories: {
    locale: string;
    postID: string;
    category: string;
  };
  onSubmit: (
    imageUploads: File[],
    content: string,
    description: string
  ) => Promise<void>;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      ImageExts.extend({
        renderHTML({ HTMLAttributes }) {
          return [
            "figure",
            {
              class: "w-100",
              style:
                "display: flex; flex-direction: column; align-items: center; justify-content: center;",
            },
            [
              "img",
              {
                ...HTMLAttributes,
                class: HTMLAttributes.class || "" + " w-[80%]",
              },
            ],
          ];
        },
      }),
      Dropcursor,
      Placeholder.configure({
        placeholder: "Write something...",
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      Underline,
      CharacterCount,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      LinkExts.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);

            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }

            // disallowed protocols
            const disallowedProtocols = ["ftp", "file", "mailto"];
            const protocol = parsedUrl.protocol.replace(":", "");

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }

            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map((p) =>
              typeof p === "string" ? p : p.scheme
            );

            if (!allowedProtocols.includes(protocol)) {
              return false;
            }

            // // disallowed domains
            // const disallowedDomains = [
            //   "example-phishing.com",
            //   "malicious-site.net",
            // ];
            // const domain = parsedUrl.hostname;

            // if (disallowedDomains.includes(domain)) {
            //   return false;
            // }

            // all checks have passed
            return true;
          } catch (error) {
            return false;
          }
        },
      }),
      Focus.configure({
        className: "has-focus",
        mode: "all",
      }),
      Youtube.configure({
        controls: true,
        nocookie: true,
        HTMLAttributes: {
          style: "width: 100%",
        },
      }),
      TextStyle,
      FontFamily,
    ],
    immediatelyRender: false,
    injectCSS: true,
    editable: true,
    editorProps: {
      attributes: {
        class: "w-full h-full cursor-text px-8 py-5",
      },
      handleDrop(view, event, slice, moved) {
        if (
          !moved &&
          event.dataTransfer &&
          event.dataTransfer.files &&
          event.dataTransfer.files[0]
        ) {
          event.preventDefault();
          let files: FileList = event.dataTransfer.files;

          for (let i = 0; i < files.length; i++) {
            let file: File = normalizeFile(files[i]);

            if (/^image\/(jpeg|png|gif|webp?)$/.test(file.type)) {
              setImageUploads((prev) => [...prev, file]);

              let _URL = window.URL;
              const url = _URL.createObjectURL(file);

              const { schema } = view.state;
              const coordinates = view.posAtCoords({
                left: event.clientX,
                top: event.clientY,
              });
              const node = schema.nodes.image.create({
                src: url,
                alt: file.name,
                title: file.name,
              });
              const transaction = view.state.tr.insert(
                coordinates?.pos || 0,
                node
              );

              view.dispatch(transaction);
            } else {
              alert("The file uploaded is not valid");
              return false;
            }
          }
          return true;
        }
      },
      handlePaste(view, event, slice) {
        event.preventDefault();
        const pasteFiles = event.clipboardData?.files;
        if (pasteFiles) {
          for (let i = 0; i < pasteFiles.length; i++) {
            let file: File = normalizeFile(pasteFiles[i]);

            if (/^image\/(jpeg|png|gif|webp?)$/.test(file.type)) {
              setImageUploads((prev) => [...prev, file]);

              let _URL = window.URL;
              const url = _URL.createObjectURL(file);

              const { schema } = view.state;
              const coordinates = view.state.selection.$anchor.pos;

              const node = schema.nodes.image.create({
                src: url,
                alt: file.name,
                title: file.name,
              });
              const transaction = view.state.tr.insert(coordinates, node);

              view.dispatch(transaction);
            } else {
              alert("The file uploaded is not valid");
              return false;
            }
          }
        }
      },
    },
    content: content,
  });

  const mainSidebar = useSidebar();
  const [imageUploads, setImageUploads] = useState<File[]>([]);

  async function handlePublish() {
    try {
      if (editor) {
        const html = editor.getHTML();
        const description = new DOMParser()
          .parseFromString(html, "text/xml")
          .getElementsByTagName("span")[0].innerHTML;
        const content = await processHTMLContent(
          html,
          categories.category,
          categories.postID
        );

        await onSubmit(imageUploads, content, description);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      toast({
        title: "Error" + error,
        duration: 2500,
      });
      console.log(error);
    }
  }

  useEffect(() => {
    mainSidebar.setOpen(false);
  }, []);

  return (
    <div className="h-full overflow-hidden py-2 pr-4 flex flex-row">
      <div className="mb-2 flex flex-col justify-between mr-2">
        <Button
          className="w-fit"
          variant="ghost"
          onClick={() => mainSidebar.toggleSidebar()}
        >
          <PanelRight />
        </Button>
        <div className="flex flex-col ">
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="ghost"
                className="text-md"
                type="submit"
                onClick={handlePublish}
              >
                <SaveIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p className="text-base italic">Publish</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="w-[15%]">{children}</div>

      {/* <MetadataForm
        options={{ class: "text-base pr-3 mt-[-8px] w-[15%]" }}
        ref={metadataForm}
        fieldList={metaField}
      /> */}
      <div className="editor w-[90%] flex-1 flex flex-col border-2 border-gray-400 rounded-lg overflow-hidden">
        <Menubar editor={editor} setImageUploads={setImageUploads} />
        <EditorContent
          editor={editor}
          className="tiptap__wrapper flex-1 py overflow-auto"
        />
      </div>
    </div>
  );
}
