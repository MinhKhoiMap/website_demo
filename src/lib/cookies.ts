"use server";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
export async function setCookie(
  name: string,
  token: string,
  expiresAt: string
): Promise<void> {
  const cookiesStore = await cookies();
  cookiesStore.set(name, token, { expires: new Date(expiresAt) });
}

export async function getCookie(
  name: string
): Promise<RequestCookie | undefined> {
  const cookiesStore = await cookies();
  return cookiesStore.get(name);
}
