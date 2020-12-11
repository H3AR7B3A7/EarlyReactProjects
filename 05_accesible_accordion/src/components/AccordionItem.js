import React from "react";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionBody } from "./AccordionBody";

export const AccordionItem = (props) => {
  const {
    index,
    title,
    body,
    onClickTitle,
    isOpen,
    isFocused,
    focusNext,
    focusPrevious,
    focusClear,
    handleEscape
  } = props;
  return (
    <div className="accordion-wrapper">
      <AccordionHeader
        title={title}
        onClickTitle={onClickTitle}
        isOpen={isOpen}
        isFocused={isFocused}
        focusNext={focusNext}
        focusPrevious={focusPrevious}
        focusClear={focusClear}
        handleEscape={handleEscape}
        index={index}
      />
      {isOpen && <AccordionBody body={body} index={index} />}
    </div>
  );
};
