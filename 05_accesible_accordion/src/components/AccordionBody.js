import React from "react";

export const AccordionBody = (props) => {
  const { index, body } = props;
  return (
    <div
      className="accordion-body"
      id={`section${index}`}
      role="region"
      aria-labelledby={`label${index}`}
    >
      <div className="accordion-content">{body}</div>
    </div>
  );
};
