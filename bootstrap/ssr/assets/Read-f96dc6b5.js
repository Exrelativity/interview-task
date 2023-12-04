import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "./styles-899226fb.js";
import { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import { A as Authenticated } from "./AuthenticatedLayout-945826f7.js";
import { P as PrimaryButton } from "./PrimaryButton-cf1a4cd8.js";
import "./ApplicationLogo-fc9e7c15.js";
import "@headlessui/react";
function Read({ auth, page_data }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(page_data ? page_data : auth.user);
  useEffect(() => {
    setLoading(false);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: data.name }),
    /* @__PURE__ */ jsx(
      Authenticated,
      {
        user: auth.user,
        header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Dashboard" }),
        children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col justify-center items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-full pb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "text-center text-3xl", children: data.name }),
              /* @__PURE__ */ jsx("div", { className: "text-center text-sm text-green-700", children: data.role }),
              /* @__PURE__ */ jsx("div", { className: "text-center text-sm", children: data.email })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full text-center flex flex-row flex-wrap justify-center items-center gap-1", children: data.id === auth.user.id && /* @__PURE__ */ jsx(
              Link,
              {
                className: "w-72 h-14",
                href: route("user.edit", { id: data.id }),
                children: /* @__PURE__ */ jsx(
                  PrimaryButton,
                  {
                    className: "w-full h-full text-center justify-center items-center",
                    disabled: false,
                    children: /* @__PURE__ */ jsx("span", { className: "text-lg font-sans", children: "Edit" })
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("hr", { className: "mt-5" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center items-center mt-5", children: /* @__PURE__ */ jsx("div", {}) })
        ] })
      }
    )
  ] });
}
export {
  Read as default
};
