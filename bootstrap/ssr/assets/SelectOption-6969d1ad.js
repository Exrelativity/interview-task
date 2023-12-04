import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect } from "react";
const styles = "";
const SelectOption = forwardRef(function SelectOption2({ className = "", isFocused = false, optionData = [], ...props }, ref) {
  var _a;
  const select = ref ? ref : useRef();
  const nameforselected = props.value ? (_a = optionData[optionData.findIndex(
    (options) => (options.value ? options.value : options.id) === props.value
  )]) == null ? void 0 : _a.name : "select a value";
  useEffect(() => {
    if (isFocused) {
      select.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsxs(
    "select",
    {
      ...props,
      className: className + " customborder ",
      ref: select,
      children: [
        /* @__PURE__ */ jsx("option", { value: props.value ?? "", children: nameforselected }),
        optionData.length > 0 && optionData.map((options, index) => /* @__PURE__ */ jsx(
          "option",
          {
            value: options.id ? options.id : options.value,
            children: options.name
          },
          index
        ))
      ]
    }
  );
});
export {
  SelectOption as S
};
