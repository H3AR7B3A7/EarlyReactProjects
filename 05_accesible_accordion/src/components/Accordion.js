import React from "react";
import { AccordionItem } from "./AccordionItem";

export const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const [focusedIndex, setFocusedIndex] = React.useState(null);
  const AccordionChildren = children.map((child, idx) => (
    <AccordionItem
      onClickTitle={() => {
        if (idx === openIndex) {
          setOpenIndex(null);
        } else {
          setOpenIndex(idx);
        }
        setFocusedIndex(idx);
      }}
      key={idx}
      title={child.title}
      body={child.body}
      isOpen={idx === openIndex}
      index={idx}
      isFocused={focusedIndex === idx}
      focusNext={(event) => {
        if (focusedIndex === children.length - 1) {
          setFocusedIndex(0);
        } else {
          setFocusedIndex(idx + 1);
        }
        event.preventDefault();
      }}
      focusPrevious={(event) => {
        if (focusedIndex === 0) {
          setFocusedIndex(children.length - 1);
        } else {
          setFocusedIndex(idx - 1);
        }
        event.preventDefault();
      }}
      handleEscape={(event) => {
        if (focusedIndex === idx) {
          setOpenIndex(null);
          event.preventDefault();
        }
      }}
    />
  ));
  return <div className="accordion-wrapper">{AccordionChildren}</div>;
};
