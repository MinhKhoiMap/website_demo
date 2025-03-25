"use client";

import React, {
  ChangeEvent,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import RichtextEditor from "../../components/Editor/richtext-editor";
import { CreatePostBody } from "@/schemaValidations/post.schema";
import { uploadImageService } from "@/services/uploadImage.service";
import { createUpdatePostServices } from "@/services/post.service";
import { toast } from "@/hooks/use-toast";
// import { AddNewFileContext } from "../../layout";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn, normalizeFile } from "@/lib/utils";
import { CalendarIcon, Check, PlusCircle } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";
import { sdgs } from "@/constants";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// const Readonly = ({ field }: { field: string }) => {
//   return (
//     <div className="my-2">
//       <Label htmlFor={field} className="text-md capitalize mb-2 block">
//         {field}
//       </Label>
//       <Input
//         id={field}
//         className="w-full placeholder:italic placeholder:capitalize"
//         value={undefined}
//         disabled
//         name={field}
//       />
//     </div>
//   );
// };

const Combobox = ({
  field,
  name,
  valueArr,
}: {
  field: string;
  name: string;
  valueArr: { value: string; icon?: ReactElement }[];
}) => {
  return (
    <div className="my-2">
      <Label htmlFor={name} className="text-md capitalize mb-2 block">
        {field}
      </Label>
      <Select defaultValue="false" name={name}>
        <SelectTrigger className="w-full capitalize h-fit">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {valueArr.map((value) => (
            <SelectItem value={value.value}>
              <span className="capitalize cursor-pointer flex gap-2 items-center">
                {value.value} {value.icon}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const InputString = ({
  field,
  name,
  state,
  setState,
}: {
  field: string;
  name: string;
  state?: string;
  setState?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="my-2">
      <Label htmlFor={name} className="text-md capitalize mb-2 block">
        {field}
      </Label>
      <Input
        id={name}
        className="w-full placeholder:italic placeholder:capitalize"
        placeholder={`Enter ${field}...`}
        value={state || undefined}
        onChange={(e) => setState && setState(e.target.value)}
        name={name}
      />
    </div>
  );
};

const DatePicker = ({
  field,
  date,
  setDate,
}: {
  field: string;
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) => {
  return (
    <div className="my-2">
      <Label className="text-md capitalize mb-2 block">{field}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
            title={date ? format(date, "PPP") : "No date picked"}
          >
            <CalendarIcon />
            <span className="line-clamp-1">
              {date ? format(date, "PPP") : "Pick a date"}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={setDate}
            initialFocus
            disabled={(date) => date > new Date()}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

const FilesInput = ({
  field,
  name,
  required = false,
}: {
  field: string;
  name: string;
  required?: boolean;
}) => {
  return (
    <div className="my-2">
      <Label htmlFor={name} className="text-md capitalize mb-2 block">
        {field}
      </Label>
      <Input
        type="file"
        id={name}
        name={name}
        required={required}
        className="cursor-pointer"
      />
    </div>
  );
};

const Checkbox = ({
  field,
  name,
  valueArr,
  state,
  setState,
  maxItems,
}: {
  field: string;
  name: string;
  valueArr: { value: string; icon?: ReactElement }[];
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  maxItems?: number;
}) => {
  return (
    <div className="my-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-full border-dashed justify-between"
          >
            <span className="flex items-center gap-1">
              <PlusCircle />
              {field}
            </span>
            {state?.length > 0 && (
              <div className="hidden lg:inline-flex items-center justify-between gap-1">
                <Separator orientation="vertical" className="h-4" />
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal"
                >
                  {state.length} selected
                </Badge>
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <Command>
            <CommandInput placeholder={field + "..."} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {valueArr.map((option) => {
                  const isSelected = state.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => {
                        if (isSelected) {
                          setState(state.filter((val) => val !== option.value));
                        } else {
                          if (maxItems && state.length >= maxItems) {
                            toast({
                              title:
                                "Maximum number of items selected is " +
                                maxItems,
                            });
                            return;
                          }

                          setState((prev) => [...prev, option.value]);
                        }
                      }}
                      className="cursor-pointer"
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible"
                        )}
                      >
                        <Check />
                      </div>
                      {option.icon}
                      <span>{option.value}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {state?.length > 0 && (
        <div className="mt-1">
          {/* <Separator orientation="vertical" className="mx-2 h-4" /> */}
          <Badge
            variant="secondary"
            className="rounded-sm px-1 font-normal lg:hidden"
          >
            {state.length} selected
          </Badge>
          <div className="hidden gap-1 lg:flex flex-wrap w-full">
            {valueArr
              .filter((option) => state.includes(option.value))
              .map((option) => (
                <Badge
                  variant="secondary"
                  key={option.value}
                  className="rounded-sm p-1 font-normal w-9 h-9 cursor-pointer"
                  title={option.value}
                >
                  {option.icon}
                </Badge>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

const sdgsVal: { value: string; icon?: ReactElement }[] = sdgs.map(
  (_, sdg) => ({
    value: `SDG ${sdg + 1}`,
    icon: (
      <Image
        src={`/images/sdgs_icon/goal_${sdg + 1}.svg`}
        alt={`SDG ${sdg + 1}`}
        width={40}
        height={40}
      />
    ),
  })
);

export default function Editor({ locale }: { locale: string }) {
  const router = useRouter();
  const metaForm = useRef(null);
  const sidebar = useSidebar();

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [postID, setPostID] = useState<string>("");
  const [sdgsSelected, setSdgsSelected] = useState<string[]>([]);

  async function updatePost(
    imageUploads: File[],
    content: string,
    description: string
  ) {
    try {
      if (!metaForm.current) throw new Error("Invalid metaForm");

      const metaDataForm = new FormData(metaForm.current);

      const meta: { [key: string]: any } = {};

      var thumb: File | undefined;

      for (const f of metaDataForm.keys()) {
        if (metaDataForm.get(f) instanceof File) {
          thumb = normalizeFile(metaDataForm.get(f) as File);
          imageUploads.push(thumb);
        } else {
          meta[f] = metaDataForm.get(f);
        }
      }

      meta.sdgs = sdgsSelected.map((sdg) => Number(sdg.split("SDG ")[1]));
      meta.description = description;

      if (!(meta.id && meta.title && thumb))
        throw new Error("Required field is missing");

      meta.image = `/images/news/${meta.id}/${thumb.name}`;

      const bodyParse = CreatePostBody.safeParse({
        metadata: meta,
        content: content,
      });

      if (bodyParse.error) throw new Error(bodyParse.error.message);

      await uploadImageService("news", meta.id, imageUploads);

      await createUpdatePostServices.createPost(
        "news",
        meta.id,
        locale,
        bodyParse.data
      );

      toast({
        title: "Create Post Success",
        duration: 2500,
      });

      sidebar.setOpen(true);
      router.push("./");
    } catch (error) {
      const _e: Error = error as Error;

      console.log(_e);

      toast({
        title: _e.message,
        duration: 1000,
      });
    }
  }

  return (
    <RichtextEditor
      categories={{
        locale,
        postID: postID,
        category: "news",
      }}
      onSubmit={updatePost}
    >
      <form
        ref={metaForm}
        className="w-full mb-4 space-y-3 text-base pr-3 mt-[-8px]"
      >
        <InputString field="id" name="id" state={postID} setState={setPostID} />
        <InputString field="title" name="title" />
        <Combobox
          field="show image"
          name="showImage"
          valueArr={[{ value: "true" }, { value: "false" }]}
        />
        <Combobox
          field="draft"
          name="draft"
          valueArr={[{ value: "true" }, { value: "false" }]}
        />
        <DatePicker field="publish date" date={date} setDate={setDate} />
        <FilesInput field="thumbnail" name="image" />
        <Checkbox
          field="SDGs"
          name="sdg"
          valueArr={sdgsVal}
          state={sdgsSelected}
          setState={setSdgsSelected}
          maxItems={3}
        />
      </form>
    </RichtextEditor>
  );
}
