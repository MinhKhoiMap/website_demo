"use client";

import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Check, ChevronsUpDown } from "lucide-react";
import { Editor } from "@tiptap/react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import { TooltipContent } from "./tooltip";

interface Item {
  label: string;
  value: string;
}

interface ComboBoxProps {
  defaultValue?: Item | null;
  listItems: Item[];
  handleClick: (value: Item) => void;
  editor: Editor;
}

export default function ComboBox({
  defaultValue = null,
  listItems,
  handleClick,
  editor,
}: ComboBoxProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(
    defaultValue?.value || null
  );

  useEffect(() => {
    editor.on("selectionUpdate", () => {
      listItems.forEach((item) => {
        if (editor.isActive("textStyle", { fontFamily: item.value })) {
          setValue(item.value);
        }
      });
    });
  }, [editor]);

  return (
    <Popover>
      <PopoverTrigger>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={open}
              className="w-[125px] justify-between capitalize h-8 !py-0 !items-center"
            >
              <p className="line-clamp-1 text-sm">
                {value
                  ? listItems.find((item) => item.value === value)?.label
                  : "Select font..."}
              </p>
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm capitalize">
              {value
                ? listItems.find((item) => item.value === value)?.label
                : "Font"}
            </p>
          </TooltipContent>
        </Tooltip>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search font..." className="h-9" />
          <CommandList>
            <CommandEmpty>No font found.</CommandEmpty>
            <CommandGroup>
              {listItems.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(selectedValue) => {
                    handleClick(item);
                    setValue(selectedValue);
                    setOpen(false);
                  }}
                  className="capitalize cursor-pointer"
                  data-test-id={item.label}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
