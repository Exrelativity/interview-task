import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import "./styles-899226fb.js";
import { useState, useEffect, forwardRef, useRef } from "react";
import { Link, Head } from "@inertiajs/react";
import { A as Authenticated } from "./AuthenticatedLayout-945826f7.js";
import { MultiSelect } from "react-multi-select-component";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch.js";
import { BiShow } from "@react-icons/all-files/bi/BiShow.js";
import { AiTwotoneEdit } from "@react-icons/all-files/ai/AiTwotoneEdit.js";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete.js";
import { BiReset } from "@react-icons/all-files/bi/BiReset.js";
import "./ApplicationLogo-fc9e7c15.js";
import "@headlessui/react";
const styles$2 = "";
function Pagination({ page_data, ...props }) {
  const [pageData, setPageData] = useState();
  useEffect(() => {
    setPageData((pageData2) => page_data);
  }, [page_data]);
  return /* @__PURE__ */ jsx("div", { className: "relative flex justify-center center py-5 mt-5 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "pagination", children: [
    pageData && /* @__PURE__ */ jsx(Link, { className: "link", href: pageData.first_page_url, children: "«" }),
    pageData && /* @__PURE__ */ jsx(Link, { className: "link", href: pageData.prev_page_url, children: "prev" }),
    (pageData == null ? void 0 : pageData.current_page) && /* @__PURE__ */ jsxs("div", { className: "link", children: [
      pageData.current_page,
      " of ",
      pageData.last_page
    ] }),
    pageData && /* @__PURE__ */ jsx(Link, { className: "link", href: pageData.next_page_url, children: "next" }),
    pageData && /* @__PURE__ */ jsx(Link, { className: "link", href: pageData.last_page_url, children: "»" })
  ] }) });
}
const styles$1 = "";
const SelectCheckbox = forwardRef(function SelectCheckbox2({
  className = "",
  optionData = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true }
  ],
  ...props
}, ref) {
  const [selected, setSelected] = useState(props.selectedRows);
  const { selectedRows, setSelectedRows } = props;
  const selectedRef = ref ? ref : useRef();
  useEffect(() => {
    selectedRef.current = selected;
    setSelectedRows((selectedRows2) => selected);
  }, [selected]);
  const customFilterOptions = (options, filter) => {
    if (!filter) {
      return options;
    }
    const re = new RegExp(filter, "i");
    return options.filter(({ value }) => value && value.match(re));
  };
  return /* @__PURE__ */ jsx(
    MultiSelect,
    {
      className,
      options: optionData,
      value: selected,
      onChange: setSelected,
      filterOptions: customFilterOptions,
      labelledBy: "Select {props.heading}"
    }
  );
});
const styles = "";
function CustomAdminTable({
  auth,
  headings = [
    {
      value: "name",
      label: "Name"
    },
    {
      value: "email",
      label: "Email"
    },
    {
      value: "role",
      label: "Role"
    }
  ],
  data = [
    {
      name: "Ukweh",
      role: "admin",
      email: "ukweheverest@github.com"
    }
  ],
  title = "List of Users",
  searchURLName,
  filterDateURLName,
  singleItemDisplayPrefixURLName,
  singleItemEditPrefixURLName,
  singleItemDeletePrefixURLName,
  addNewEntryURLName,
  ...props
}) {
  const [datainuse, setDatainuse] = useState(data);
  const [selectedRows, setSelectedRows] = useState(headings.slice(0, 5));
  useEffect(() => {
    const first5 = headings.slice(0, 5);
    setSelectedRows((selectedRows2) => first5);
  }, []);
  useEffect(() => {
    setSelectedRows((selectedRows2) => selectedRows2);
  }, [selectedRows]);
  return /* @__PURE__ */ jsx("div", { className: "w-full flex flex-col overflow-auto", children: /* @__PURE__ */ jsx("div", { className: "min-w-[764px] w-full mx-auto sm:px-6 lg:px-8 min-h-[50vh] lg:min-h-[70vh]", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4  mt-4", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bolder text-center leading-tight text-gray-900", children: title }) }),
    /* @__PURE__ */ jsxs("div", { className: "-mb-2 py-4 flex flex-row w-full flex-nowrap justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-start py-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center py-2 pr-4", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "bg-white-200 tableinputtag appearance-none border-2 border-gray-200 rounded div10-8 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
              id: "inline-searcg",
              type: "text",
              placeholder: "Search"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "tablesubmitbutton bg-white-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 div10-2",
              type: "submit",
              children: /* @__PURE__ */ jsx(BsSearch, { className: "icons" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center py-2 pr-4", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "bg-white-200 tableinputtag appearance-none border-2 border-gray-200 rounded div10-8 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
              id: "filter-date",
              type: "date",
              placeholder: "Date"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "tablesubmitbutton bg-white-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 div10-2",
              type: "submit",
              children: /* @__PURE__ */ jsx(BsSearch, { className: "icons" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center py-2", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "tablesubmitbutton bg-white-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
            type: "button",
            onClick: (e) => setDatainuse((datainuse2) => data),
            children: /* @__PURE__ */ jsx(BiReset, { className: "icons" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex tableAddNewEntry justify-self-end items-center py-2", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: route(addNewEntryURLName),
          className: "inline-block link min-w-fit px-5 py-3 whitespace-nowrap border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-950 hover:bg-indigo-500 focus:outline-none focus:shadow-outline",
          children: "New Entry"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "-my-2 py-2 flex flex-col w-full h-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full border-b border-gray-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-full border-b border-gray-200 bg-white flex-grow leading-4 tracking-wider text-base text-gray-900", children: [
        /* @__PURE__ */ jsx("div", { className: "w-6/12 flex-grow max-md:w-0 px-6 py-5 text-left" }),
        /* @__PURE__ */ jsx("div", { className: "md:w-6/12 max-md:w-full px-6 py-5 text-left z-10", children: /* @__PURE__ */ jsx(
          SelectCheckbox,
          {
            className: "w-full rounded",
            selectedRows,
            setSelectedRows,
            optionData: headings
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left font-medium", children: /* @__PURE__ */ jsx(
            "input",
            {
              className: "form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",
              type: "checkbox"
            }
          ) }),
          selectedRows.map(
            (selectedRow, index) => /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-6 py-3 text-left font-medium",
                children: selectedRow.label
              },
              index
            )
          ),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left font-medium" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "bg-white ", children: datainuse.map((datas, index) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-no-wrap border-b border-gray-200", children: /* @__PURE__ */ jsx(
            "input",
            {
              className: "form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",
              type: "checkbox"
            }
          ) }),
          selectedRows.map(
            (selectedRow, index2) => /* @__PURE__ */ jsx(
              "td",
              {
                className: "px-6 py-4  whitespace-no-wrap  border-gray-200",
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: selectedRow.value === "content" ? "text-sm leading-5 text-gray-900 w-[180px]" : "text-sm leading-5 text-gray-900",
                    children: datas[selectedRow.value]
                  }
                )
              },
              index2
            )
          ),
          /* @__PURE__ */ jsx("td", { className: "px-6 flex flex-col items-center m-auto justify-center py-4 whitespace-no-wrap text-center border-gray-200 text-sm leading-5 font-medium", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center items-center flex-grow", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row", children: [
            singleItemDisplayPrefixURLName && /* @__PURE__ */ jsx(
              Link,
              {
                title: "click to view item",
                href: route(singleItemDisplayPrefixURLName, {
                  id: datas["id"]
                }),
                className: "text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline mr-2",
                children: /* @__PURE__ */ jsx(BiShow, {})
              }
            ),
            /* @__PURE__ */ jsxs(Fragment, { children: [
              datas.userId === auth.user.id && /* @__PURE__ */ jsx(Fragment, { children: singleItemEditPrefixURLName && /* @__PURE__ */ jsx(
                Link,
                {
                  title: "click to edit item",
                  href: route(singleItemEditPrefixURLName, {
                    id: datas["id"]
                  }),
                  className: "text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline mr-2",
                  children: /* @__PURE__ */ jsx(AiTwotoneEdit, {})
                }
              ) }),
              datas.userId === auth.user.id && /* @__PURE__ */ jsx(Fragment, { children: singleItemDeletePrefixURLName && /* @__PURE__ */ jsx(
                Link,
                {
                  title: "click to delete item",
                  href: route(singleItemDeletePrefixURLName, {
                    id: datas["id"]
                  }),
                  className: "text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline",
                  children: /* @__PURE__ */ jsx(AiFillDelete, {})
                }
              ) })
            ] })
          ] }) }) })
        ] }, index)) })
      ] })
    ] }) })
  ] }) }) });
}
function Index({ auth, message, ...props }) {
  const [isLoading, setLoading] = useState(true);
  const tableData = {
    auth,
    headings: [
      {
        value: "name",
        label: "Name"
      },
      {
        value: "email",
        label: "Email"
      },
      {
        value: "role",
        label: "Role"
      }
    ],
    data: props.page_data.data ? [...props.page_data.data] : [],
    title: "All Users",
    searchURLName: "user.search",
    filterDateURLName: "user.searchdate",
    singleItemDisplayPrefixURLName: "user.show",
    singleItemEditPrefixURLName: "user.edit",
    singleItemDeletePrefixURLName: "user.destroy",
    addNewEntryURLName: "user.create",
    ...props
  };
  useEffect(() => {
    setLoading(false);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "All Users" }),
    /* @__PURE__ */ jsx(
      Authenticated,
      {
        auth,
        children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsx(CustomAdminTable, { ...tableData }),
          props.page_data.data && /* @__PURE__ */ jsx(Pagination, { ...props })
        ] })
      }
    )
  ] });
}
export {
  Index as default
};
