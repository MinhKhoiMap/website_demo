"use client";

import { createContext, useContext, useState } from "react";

const bgImageDefault = "/images/backgrounds/page-title.jpg";

interface PageHeaderContextProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  bgImage: string;
  setBgImage: React.Dispatch<React.SetStateAction<string>>;
}

const PageHeaderContext = createContext<PageHeaderContextProps | undefined>(
  undefined
);

export default function PageHeaderProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [bgImage, setBgImage] = useState<string>(bgImageDefault);

  return (
    <PageHeaderContext.Provider
      value={{
        title,
        description,
        bgImage,
        setTitle,
        setDescription,
        setBgImage,
      }}
    >
      {children}
    </PageHeaderContext.Provider>
  );
}

export const usePageHeaderContext = () => {
  const context = useContext(PageHeaderContext);
  if (!context) {
    throw new Error(
      "usePageHeaderContext must be used within an PageHeaderProvider"
    );
  }
  return context;
};

export const PageHeaderContextComponent = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  const { setTitle, setDescription } = usePageHeaderContext();
  if (title) setTitle(title);
  if (description) setDescription(description);

  return <></>;
};
