import React from "react";
import { useAccordionContext } from "./Accordion";

const AccordionItem = ({ id, className, title, children }) => {
  const { openItemId, openItem, closeItem } = useAccordionContext();

  const isOpen = openItemId === id;

  const handleClick = () => {
    if (isOpen) {
      closeItem();
    }
  };

  return (
    <li className={className}>
      <h3 onClick={handleClick}>{title}</h3>
      <div className={isOpen ? "open" : undefined}>{children}</div>
    </li>
  );
};

export default AccordionItem;
