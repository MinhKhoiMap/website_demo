"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MetadataForm({
  fieldList,
  ref,
  options,
}: {
  fieldList: { field: string; type: string; value?: any }[];
  ref: React.RefObject<HTMLFormElement>;
  options?: {
    class: string;
  };
}) {
  return (
    <form
      className={`mb-4 space-y-3 ${options?.class ? options.class : ""}`}
      ref={ref}
    >
      {fieldList.map((field) => {
        const type = field.type.toLowerCase();
        if (type === "zodreadonly") {
          return (
            <div className="my-2" key={field.field}>
              <Label
                htmlFor={field.field}
                className="text-md capitalize mb-2 block"
              >
                {field.field}
              </Label>
              <Input
                id={field.field}
                className="w-full placeholder:italic placeholder:capitalize"
                value={field?.value || undefined}
                disabled
                name={field.field}
              />
            </div>
          );
        }
        if (type === "zodstring") {
          return (
            <div className="my-2" key={field.field}>
              <Label
                htmlFor={field.field}
                className="text-md capitalize mb-2 block"
              >
                {field.field}
              </Label>
              <Input
                id={field.field}
                className="w-full placeholder:italic placeholder:capitalize"
                placeholder={`Enter ${field.field}...`}
                value={field?.value || undefined}
                name={field.field}
              />
            </div>
          );
        }

        if (type === "zodboolean") {
          return (
            <div className="my-2" key={field.field}>
              <Label
                htmlFor={field.field}
                className="text-md capitalize mb-2 block"
              >
                {field.field}
              </Label>
              <Select defaultValue="false" name={field.field}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="false">False</SelectItem>
                  <SelectItem value="true">True</SelectItem>
                </SelectContent>
              </Select>
            </div>
          );
        }
      })}
    </form>
  );
}
