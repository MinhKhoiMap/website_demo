import { redirect } from "next/navigation";

export default function page() {
  redirect("/admins/auth/login");
  return null;
}
