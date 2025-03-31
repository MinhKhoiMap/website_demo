"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import authServices from "../../../../services/auth.service";

import { LoginBodySchema } from "../../../../schemaValidations/account.schema";

import "./style.css";
import { setCookie } from "@/lib/cookies";

const LogIn = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [isError, setIsError] = useState<boolean>(false);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginForm = new FormData(e.target as HTMLFormElement);
    const email = loginForm.get("email"),
      password = loginForm.get("password");

    try {
      const loginBodyParse = LoginBodySchema.safeParse({
        username: email,
        password: password,
      });

      if (loginBodyParse.error) {
        setIsError(true);
        throw new Error(loginBodyParse.error.toString());
      }

      const {
        payload: { data, message },
      } = await authServices.login(loginBodyParse.data);

      await setCookie("sessionToken", data.token, data.expirseAt);

      localStorage.setItem(
        "sessionToken",
        JSON.stringify({ token: data.token, expires: data.expirseAt })
      );

      router.push("/admins");
      toast({
        title: message,
        duration: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("sessionToken")) {
      try {
        const temp = localStorage.getItem("sessionToken");
        if (temp !== null) {
          const token = JSON.parse(temp);
          setCookie("sessionToken", token.token, token.expiresAt);
        }
      } catch (error) {
        console.log(error);
      }
      router.push("/admins/dashboard");
    }
  }, []);

  return (
    <div>
      <h3 className="w-fit text-4xl font-extrabold mb-7 relative left-1/2 -translate-x-1/2 after:w-[50%] after:h-[3px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3">
        Login
      </h3>
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <div className="control-group">
          <label
            htmlFor="email"
            className="block text-base mb-1 transition-colors"
          >
            Username
          </label>
          <div
            className={`border-b-2 ${
              isError ? "border-red-500" : "border-black"
            } flex items-center`}
          >
            <input
              className="text-base outline-none mr-1 flex-1 p-1 inline-block"
              type="email"
              required
              id="email"
              name="email"
              autoComplete="email"
            />
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
        <div className="control-group">
          <label
            htmlFor="password"
            className="block text-base mb-1 transition-colors"
          >
            Password
          </label>
          <div
            className={`border-b-2 ${
              isError ? "border-red-500" : "border-black"
            } flex items-center`}
          >
            <input
              className="text-base outline-none mr-1 flex-1 p-1 inline-block"
              type="password"
              required
              name="password"
              id="password"
            />
            <i className="fa-solid fa-unlock-keyhole"></i>
          </div>
        </div>
        {isError && (
          <p className="text-sm italic text-red-600">
            <i className="fa-solid fa-circle-exclamation mr-1"></i> Incorrect
            username or password.
          </p>
        )}
        <button className="w-full bg-black text-white text-base py-2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

const Auth = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/70 flex justify-center items-center">
      <div
        className="max-w-[748px] rounded-lg bg-white border-[2px] border-black flex justify-between relative w-[80%] overflow-hidden"
        style={{ boxShadow: "0 0 10px rgba(255,255,255,0.4)" }}
      >
        <div className="flex-1 py-10 px-6">
          <LogIn />
        </div>
        <div className="flex-1 text-right font-extrabold text-white break-words py-10 px-6">
          <div className="h-full z-[2] relative flex flex-col items-end justify-center">
            <p className="font-extrabold text-4xl mb-2 uppercase leading-[50px]">
              Adminstrators <br /> Page!
            </p>
            <p className="w-fit text-base font-bold">
              If you don&apos;t have account <br /> please contact IT
              department!
            </p>
          </div>
          <div
            className="w-[40%] h-full absolute right-0 top-0 z-[1] border-l-[450px] border-l-transparent border-t-[700px] border-[transparent] border-t-black transition-all duration-200"
            style={{ animation: "Auth .5s ease-out" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
