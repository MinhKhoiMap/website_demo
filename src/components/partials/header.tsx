"use client";

import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

import "./style.scss";

import { socials, mobile, email, logo } from "../../constants/index";
import { mainMenuEn } from "../../constants/en/index";
import { mainMenuVi } from "@/constants/vi";
import { Fragment } from "react";
import { Switch } from "antd";

export default function Header() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const mainMenu = locale === "en" ? mainMenuEn : mainMenuVi;

  const handleRedirectLocale = (checked: boolean) => {
    //  checked = En
    // unchecked = Vi
    // Add locale to current url
    router.replace(pathname, { locale: checked ? "en" : "vi" });
  };

  return (
    <header className="fixed-top header">
      <div className="top-header bg-white">
        <div className="container">
          <div className="row no-gutters align-items-center">
            <div className="col-lg-4 text-center text-lg-left">
              <ul className="list-inline">
                {socials.map((social) => (
                  <Fragment key={social.title}>
                    {social.link !== "#" && (
                      <li className="list-inline-item" key={social.title}>
                        <a
                          href={social.link}
                          className="d-inline-block mr-2 text-color"
                        >
                          <i className={`ti ${social.icon}`}></i>
                        </a>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ul>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link
                    href={`tel:${mobile}`}
                    className="text-color-mr-3 d-flex align-items-center"
                  >
                    <Image
                      src="/images/telephone.png"
                      alt="telephone"
                      width={14}
                      height={14}
                      style={{ marginRight: "5px" }}
                    />
                    {mobile}
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    href={`mailto:${email}`}
                    className="text-color-mr-3 d-flex align-items-center"
                  >
                    <Image
                      src="/images/email.png"
                      alt="email"
                      width="14"
                      height="14"
                      style={{ marginRight: "5px" }}
                    />
                    <span>{email}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="navigation nav-bg w-100 top-hider">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link href="/" className="navbar-brand" style={{ width: "120px" }}>
              <Image
                className="img-fluid"
                src={logo}
                alt="logo"
                width={150}
                height={48}
              />
            </Link>
            <button
              className="navbar-toggler rounded-0"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse text-center text-[14px] justify-center"
              id="navigation"
            >
              <ul className="navbar-nav ml-auto pl-2 pl-xl-5 items-center">
                {mainMenu
                  .sort((a, b) =>
                    a.weight && b.weight ? a.weight - b.weight : 1
                  )
                  .map((item) => (
                    <Fragment key={item.name}>
                      {/* Render this JSX whenever have submenu */}
                      {item?.subMenu && (
                        <li
                          className="nav-item dropdown align-self-lg-stretch"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div
                            style={{ cursor: "pointer" }}
                            className="nav-link dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                          >
                            {item.name}
                          </div>

                          {/* Menu */}
                          <div className="dropdown-menu">
                            {item.subMenu
                              .sort((x, y) =>
                                x.weight && y.weight ? x.weight - y.weight : 1
                              )
                              .map((sub) => (
                                <Link
                                  key={sub.name}
                                  locale={locale}
                                  href={sub.url || "#"}
                                  className="dropdown-item"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                          </div>
                        </li>
                      )}
                      {/* Render this JSX whenever don't have submenu */}
                      {!item?.subMenu && (
                        <li
                          className="nav-item align-self-lg-stretch"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <Link
                            className="nav-link"
                            locale={locale}
                            href={item.url || "#"}
                          >
                            {item.name}
                          </Link>
                        </li>
                      )}
                    </Fragment>
                  ))}
              </ul>
              <Switch
                className="mb-4 mt-2 mb-lg-0 mt-lg-0 ml-lg-3"
                checkedChildren={<span className="text-black">En</span>}
                unCheckedChildren={<span className="text-[#FFCD00]">Vi</span>}
                defaultChecked={locale === "en"}
                onChange={handleRedirectLocale}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
