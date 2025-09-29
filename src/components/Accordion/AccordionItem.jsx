import React from "react";

const AccordionItem = ({ title, children }) => {
  return (
    <li>
      <h3>{title}</h3>
      <div>{children}</div>
    </li>
  );
};

export default AccordionItem;
