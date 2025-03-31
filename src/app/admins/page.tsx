"use client";

import { getCookie, setCookie } from "@/lib/cookies";
import { redirect } from "next/navigation";

export default function page() {
  (async function cookie() {
    const cookies = await getCookie("sessionToken");
    if (cookies) {
      const storage = localStorage.getItem("sessionToken");
      if (storage) {
        const token: { token: string; expiresAt: string } = JSON.parse(storage);
        setCookie("sessionToken", token.token, token.expiresAt);
        redirect("/admins/dashboard");
      } else {
        redirect("/admins/auth/login");
      }
    }
  })();

  return null;
}
