"use client";

import React, { Dispatch, SetStateAction } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useRouter } from "next/navigation";

export default function YearTabs({
  items,
  defaultKey,
  tabPosition = "top",
  center = false,
}: {
  items: TabsProps["items"];
  defaultKey: string;
  tabPosition?: "top" | "bottom" | "left" | "right";
  center?: boolean;
}) {
  const router = useRouter();

  return (
    <AntdRegistry>
      <Tabs
        centered={center}
        defaultActiveKey={defaultKey}
        items={items}
        tabBarStyle={{ color: "#971919" }}
        tabPosition={tabPosition}
        onChange={(key) => {
          router.push(`?year=${key}`, { scroll: false });
        }}
      />
    </AntdRegistry>
  );
}
