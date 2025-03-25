import http from "@/lib/http";
import { LoginBodyType, LoginResType } from "@/schemaValidations/auth.schema";

const authServices = {
  login: (body: LoginBodyType) =>
    http.post<LoginResType>("api/users/login", body),
};

export default authServices;
