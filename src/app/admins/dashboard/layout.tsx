"use client";

import React, {
  createContext,
  FormEvent,
  MouseEvent,
  useContext,
  useState,
} from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import "./style.scss";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, PlusCircle } from "lucide-react";

// export const AddNewFileContext = createContext<{
//   postID: string | null;
//   setPostID: React.Dispatch<React.SetStateAction<string | null>>;
// } | null>(null);

interface DraftType {
  category: string;
  data: {
    metadata: {
      [key: string]: any;
    };
    content: string | null;
  };
}

const NewsMenuItem = ({ currentPath }: { currentPath: string }) => {
  const router = useRouter();

  function handleAddPost(e: MouseEvent<HTMLElement>) {
    router.push(`/admins/dashboard/news/add`);

    // if (filename && /^[A-Za-z0-9_\-]+$/.test(filename)) {
    //   const draft: DraftType = {
    //     category: "news",
    //     data: {
    //       metadata: {
    //         id: filename,
    //       },
    //       content: null,
    //     },
    //   };

    //   // const localDraft: DraftType[] = JSON.parse(
    //   //   localStorage.getItem("draft") || "[]"
    //   // );
    //   // localDraft.push(draft);
    //   // localStorage.setItem("draft", JSON.stringify(localDraft));

    //   setPostID(filename);
    //   router.push(`/admins/dashboard/news/add`);
    //   setOpen(false);
    // } else {
    //   toast({
    //     title: "File name is invalid",
    //     duration: 2000,
    //   });
    // }
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={currentPath.includes("news")}>
        <Link className="w-full" href={`/admins/dashboard/news`}>
          News
        </Link>
      </SidebarMenuButton>
      <SidebarMenuAction onClick={handleAddPost}>
        <PlusCircle />
      </SidebarMenuAction>
      {/* <SidebarMenuBadge>10</SidebarMenuBadge> */}
    </SidebarMenuItem>
  );
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentPath = usePathname();

  return (
    <section className="cms__wrapper">
      <div className="main__container">
        <SidebarProvider className="h-[80vh] min-h-0">
          <Sidebar collapsible="offcanvas" variant="sidebar">
            <SidebarHeader>
              <div className="flex flex-1 justify-between items-center gap-4">
                <Image
                  className="img-fluid w-auto h-6"
                  src="/images/logo_notext.png"
                  alt="logo"
                  width={150}
                  height={48}
                />
                <p className="text-xl font-bold">Admin Page</p>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel className="text-md text-black font-bold">
                  Categories
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <NewsMenuItem currentPath={currentPath} />
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={currentPath.includes("event")}
                      >
                        <Link
                          className="w-full"
                          href={`/admins/dashboard/event`}
                        >
                          Event
                        </Link>
                      </SidebarMenuButton>
                      {/* <SidebarMenuBadge>10</SidebarMenuBadge> */}
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Collapsible defaultOpen className="group/collapsible">
                        <SidebarMenuButton asChild>
                          <CollapsibleTrigger>
                            <p>People</p>
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </CollapsibleTrigger>
                        </SidebarMenuButton>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            <SidebarMenuSubButton
                              isActive={currentPath.includes("members")}
                            >
                              <Link
                                className="w-full"
                                href={`/admins/dashboard/members`}
                              >
                                Members
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSub>
                          <SidebarMenuSub>
                            <SidebarMenuSubButton
                              isActive={currentPath.includes("advisory")}
                            >
                              <Link
                                className="w-full"
                                href={`/admins/dashboard/advisory`}
                              >
                                Advisory
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSub>
                          <SidebarMenuSub>
                            <SidebarMenuSubButton
                              isActive={currentPath.includes(
                                "adjunctprofessors"
                              )}
                            >
                              <Link
                                className="w-full"
                                href={`/admins/dashboard/adjunctprofessors`}
                              >
                                Adjunct Professors
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSub>
                          <SidebarMenuSub>
                            <SidebarMenuSubButton
                              isActive={currentPath.includes("network")}
                            >
                              <Link
                                className="w-full"
                                href={`/admins/dashboard/network`}
                              >
                                Glocal Experts
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={currentPath.includes("partners")}
                      >
                        <Link
                          className="w-full"
                          href={`/admins/dashboard/partners`}
                        >
                          Partners
                        </Link>
                      </SidebarMenuButton>
                      {/* <SidebarMenuBadge>10</SidebarMenuBadge> */}
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <div className="mainboard flex-1 w-screen">
            {/* <AddNewFileContext.Provider value={{ postID, setPostID }}> */}
            {children}
            {/* </AddNewFileContext.Provider> */}
          </div>
        </SidebarProvider>
      </div>
    </section>
  );
}
