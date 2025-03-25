"use client";

import React, { createContext, useContext, useState } from "react";

const SubmitLogicContext = createContext<{
  onSubmit: ((formData: FormData) => void) | null;
  setOnSubmit: React.Dispatch<
    React.SetStateAction<((formData: FormData) => void) | null>
  >;
} | null>(null);

export default function RichTextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [onSubmit, setOnSubmit] = useState<
    ((formData: FormData) => void) | null
  >(null);

  return (
    <SubmitLogicContext.Provider value={{ onSubmit, setOnSubmit }}>
      {children}
    </SubmitLogicContext.Provider>
  );
}

export const useRichTextContext = () => {
  const context = useContext(SubmitLogicContext);
  if (!context) throw new Error("Error Submit Logic Context");

  return context;
};

export const RichTextContextComponent = ({
  onSubmit,
}: {
  onSubmit: (formData: FormData) => void;
}) => {
  const { setOnSubmit } = useRichTextContext();

  setOnSubmit(onSubmit);

  return <></>;
};
