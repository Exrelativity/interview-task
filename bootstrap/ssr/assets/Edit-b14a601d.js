import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "./styles-899226fb.js";
import { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { A as Authenticated } from "./AuthenticatedLayout-945826f7.js";
import { useForm } from "laravel-precognition-react-inertia";
import { P as PrimaryButton } from "./PrimaryButton-cf1a4cd8.js";
import { T as TextInput, I as InputError } from "./TextInput-feeed98c.js";
import { I as InputLabel } from "./InputLabel-2849fc87.js";
import { S as SelectOption } from "./SelectOption-6969d1ad.js";
import "./ApplicationLogo-fc9e7c15.js";
import "@headlessui/react";
function Edit({ auth, page_data, message, ...props }) {
  const [isLoading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState(page_data);
  useEffect(() => {
    setLoading(false);
  }, []);
  const { data, setData, processing, errors, submit, progress, reset } = useForm(
    "post",
    route("user.update", { id: pagedata.id ?? page_data.id }),
    {
      name: pagedata.name,
      password: pagedata.password,
      email: pagedata.email,
      role: pagedata.role
    }
  );
  const roleOptionData = [
    { value: "admin", name: "admin" },
    { value: "regular", name: "regular" }
  ];
  const handleOnChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox" ? event.target.checked : event.target.value
    );
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    submit({
      preserveScroll: true,
      onSuccess: () => {
        reset();
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Head,
      {
        title: "Edit " + pagedata.name
      }
    ),
    /* @__PURE__ */ jsx(
      Authenticated,
      {
        user: auth.user,
        header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Dashboard" }),
        children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
          message && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-center w-full items-center justify-center m-auto text-green-600", children: message }),
          /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col justify-center items-center", children: [
            /* @__PURE__ */ jsxs(
              "form",
              {
                encType: "multipart/form-data",
                onSubmit: handlesubmit,
                className: "relative w-full flex flex-col justify-center items-center m-auto",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative lg:max-w-[600px] w-full flex flex-col justify-center items-center mt-5", children: [
                    /* @__PURE__ */ jsxs("div", { className: "lg:max-w-[600px] w-full", children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "name",
                          value: "Name",
                          className: "customtext-black pt-1 mt-1"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          id: "name",
                          type: "text",
                          name: "name",
                          value: data.name,
                          className: "mt-1 w-full h-12 customtext-black",
                          autoComplete: "name",
                          onChange: handleOnChange
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        InputError,
                        {
                          message: errors.name,
                          className: "mt-2"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "lg:max-w-[600px] w-full", children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "password",
                          value: "Password",
                          className: "customtext-black pt-1 mt-1"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          required: true,
                          id: "password",
                          type: "password",
                          name: "password",
                          value: data.password,
                          className: "mt-1 w-full h-12 customtext-black border-2 border-blue-950",
                          autoComplete: "password",
                          onChange: handleOnChange
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        InputError,
                        {
                          message: errors.password,
                          className: "mt-2"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "lg:max-w-[600px] w-full", children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "role",
                          value: "Role",
                          className: "customtext-black pt-1 mt-1"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        SelectOption,
                        {
                          required: true,
                          id: "role",
                          optionData: roleOptionData,
                          name: "role",
                          value: data.role,
                          className: "mt-1 w-full customtext-black h-12",
                          autoComplete: "role",
                          onChange: handleOnChange
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        InputError,
                        {
                          message: errors.role,
                          className: "mt-2"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "lg:max-w-[600px] w-full", children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "email",
                          value: "Email",
                          className: "customtext-black pt-1 mt-1"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          id: "email",
                          type: "text",
                          name: "email",
                          value: data.email,
                          className: "mt-1 w-full customtext-black h-12",
                          autoComplete: "email",
                          onChange: handleOnChange
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        InputError,
                        {
                          message: errors.email,
                          className: "mt-2"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center mt-6 w-full", children: /* @__PURE__ */ jsx(
                    PrimaryButton,
                    {
                      className: "w-56 h-14 flex justify-center items-center",
                      type: "submit",
                      disabled: processing,
                      children: /* @__PURE__ */ jsx("span", { className: "font-sans", children: "Save" })
                    }
                  ) })
                ]
              }
            ),
            progress && /* @__PURE__ */ jsxs("progress", { value: progress.percentage, max: "100", children: [
              progress.percentage,
              "%"
            ] })
          ] })
        ] })
      }
    )
  ] });
}
export {
  Edit as default
};
