import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionContext = createContext();

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "According related components must be used within an AccordionProvider"
    );
  }
  return context;
}

const Accordion = ({ className, children }) => {
  const [openItemId, setOpenItemId] = useState();

  const toggleItem = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };
  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

export default Accordion;

Accordion.item = AccordionItem;
