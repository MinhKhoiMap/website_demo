"use client";

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ImagePlus,
  Italic,
  Link2,
  Link2Off,
  List,
  ListEnd,
  ListOrdered,
  Underline,
  Youtube,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTextSlash, faIndent } from "@fortawesome/free-solid-svg-icons";

import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ComboBox from "@/components/ui/font-combobox";
import fontDeclare from "@/app/fontDeclare";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Level } from "@tiptap/extension-heading";

const HeadingIcon = [
  <Heading1 />,
  <Heading2 />,
  <Heading3 />,
  <Heading4 />,
  <Heading5 />,
  <Heading6 />,
];

export default function Menubar({
  editor,
  setImageUploads,
}: {
  editor: Editor | null;
  setImageUploads: Dispatch<SetStateAction<File[]>>;
}) {
  if (!editor) {
    return null;
  }

  const [link, setLink] = useState<string | null>("");
  const [youtube, setYoutube] = useState<string | null>("");

  function insertImage(e: ChangeEvent<HTMLInputElement>) {
    const files: FileList | null = e.target.files;

    if (files && editor) {
      for (let i = 0; i < files.length; i++) {
        let file: File = files[i];
        let url = URL.createObjectURL(files[i]);

        editor.commands.setImage({
          src: url,
          alt: file.name,
          title: file.name,
        });

        editor.commands.setTextSelection(editor.state.selection.to);
        setImageUploads((prev) => [...prev, file]);
      }
    }
    e.target.value = "";
  }

  useEffect(() => {
    editor.on("selectionUpdate", () => {
      setLink(editor.getAttributes("link").href);
    });
  }, [editor]);

  return (
    <div className="menubar__group flex items-center gap-4 px-3 py-1 border-b border-gray-300 flex-wrap justify-center shadow-md">
      <TooltipProvider>
        <ComboBox
          listItems={fontDeclare.map((font) => ({
            label: font.name,
            value: font.font.style.fontFamily,
          }))}
          handleClick={(item: { label: string; value: string }) => {
            editor.chain().focus().setFontFamily(item.value).run();
          }}
          defaultValue={
            fontDeclare
              .map((font) => ({
                label: font.name,
                value: font.font.style.fontFamily,
                default: font.default,
              }))
              .filter((item) => item.default)[0] || null
          }
          editor={editor}
        />

        <Separator orientation="vertical" className="bg-gray-400 h-5" />

        {HeadingIcon.map((_, id) => (
          <Tooltip>
            <TooltipTrigger>
              <button
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .toggleHeading({ level: (id + 1) as Level })
                    .run()
                }
                className={
                  editor.isActive("heading", { level: id + 1 })
                    ? "is-active"
                    : ""
                }
              >
                {HeadingIcon[id]}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-gray-400 italic text-sm">Heading {id + 1}</p>
            </TooltipContent>
          </Tooltip>
        ))}

        <Separator orientation="vertical" className="bg-gray-300 h-5" />

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "is-active" : ""}
            >
              <Bold size={18} strokeWidth={3} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Bold</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "is-active" : ""}
            >
              <Italic width={18} strokeWidth={2} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Italic</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "is-active" : ""}
            >
              <Underline width={19} strokeWidth={2} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Underline</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="bg-gray-300 h-5" />

        <Tooltip>
          <TooltipTrigger>
            <Popover
              onOpenChange={(open) => {
                if (link && !open) {
                  editor.commands.setLink({ href: link, target: "_blank" });
                  setLink(null);
                }
              }}
            >
              <PopoverTrigger>
                <button>
                  <Link2 size={18} strokeWidth={3} />
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Link</h4>
                    <p className="text-sm text-muted-foreground">
                      Anchor a link.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="url">URL</Label>
                      <Input
                        id="url"
                        name="url"
                        placeholder="Link..."
                        value={link || ""}
                        onChange={(e) => {
                          setLink(e.target.value);
                        }}
                        className="col-span-2 h-8"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Attach Link</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => editor.chain().focus().unsetLink().run()}
              disabled={!editor.isActive("link")}
            >
              <Link2Off size={18} strokeWidth={3} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Remove Link</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button>
              <Label className="hover:cursor-pointer" htmlFor="insert_image">
                <ImagePlus size={18} strokeWidth={3} />
              </Label>
              <input
                type="file"
                id="insert_image"
                name="image"
                className="hidden"
                accept="image/*"
                multiple={true}
                onChange={insertImage}
              />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Add Images</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Popover
              onOpenChange={(open) => {
                if (youtube && !open) {
                  editor.commands.setYoutubeVideo({
                    src: youtube,
                    width: 480,
                    height: 480,
                  });
                }
                setYoutube(null);
              }}
            >
              <PopoverTrigger>
                <button>
                  <Youtube size={18} strokeWidth={3} />
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Youtube</h4>
                    <p className="text-sm text-muted-foreground">
                      Embed Youtube.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="url">URL</Label>
                      <Input
                        id="url"
                        name="url"
                        placeholder="Link..."
                        value={youtube || ""}
                        onChange={(e) => {
                          setYoutube(e.target.value);
                        }}
                        className="col-span-2 h-8"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Embed Youtube</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="bg-gray-300 h-5" />

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={
                editor.isActive({ textAlign: "left" }) ? "is-active" : ""
              }
            >
              <AlignLeft size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Left align</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={
                editor.isActive({ textAlign: "center" }) ? "is-active" : ""
              }
            >
              <AlignCenter size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Center align</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={
                editor.isActive({ textAlign: "right" }) ? "is-active" : ""
              }
            >
              <AlignRight size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Right align</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              className={
                editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
              }
            >
              <AlignJustify size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Justify align</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="bg-gray-300 h-5" />

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive("bulletList") ? "is-active" : ""}
            >
              <List />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Bullet List</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive("orderedList") ? "is-active" : ""}
            >
              <ListOrdered />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Number List</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() =>
                editor.chain().focus().sinkListItem("listItem").run()
              }
              disabled={!editor.can().sinkListItem("listItem")}
            >
              <FontAwesomeIcon icon={faIndent} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Increase Indent</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() =>
                editor.chain().focus().liftListItem("listItem").run()
              }
              disabled={!editor.can().sinkListItem("listItem")}
            >
              <FontAwesomeIcon icon={faIndent} className="rotate-180" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Descrease Indent</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() =>
                editor.chain().focus().splitListItem("listItem").run()
              }
              disabled={!editor.can().splitListItem("listItem")}
            >
              <ListEnd />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Split List</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="bg-gray-300 h-5" />

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => {
                editor.commands.clearNodes();
                editor.commands.unsetAllMarks();
              }}
            >
              <FontAwesomeIcon icon={faTextSlash} width={18} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-gray-400 italic text-sm">Clear formatting</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
