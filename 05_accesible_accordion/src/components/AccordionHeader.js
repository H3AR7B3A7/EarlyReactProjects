import React from "react";

export const AccordionHeader = (props) => {
  const {
    index,
    title,
    isOpen,
    onClickTitle,
    focusPrevious,
    focusNext,
    handleEscape
  } = props;

  const headerRef = React.useRef();
  React.useEffect(() => {
    if (props.isFocused) {
      headerRef.current.focus();
    }
  }, [props.isFocused]);

  return (
    <button
      aria-expanded={isOpen}
      id={`label${index}`}
      aria-controls={`section${index}`}
      className={`accordion-title ${isOpen ? "open" : ""}`}
      onClick={onClickTitle}
      ref={headerRef}
      onKeyDown={(e) => {
        switch (e.key) {
          case "ArrowUp":
            focusPrevious(e);
            break;
          case "ArrowDown":
            focusNext(e);
            break;
          case "Escape":
            handleEscape(e);
            break;
          default:
        }
      }}
    >
      {title}
    </button>
  );
};
