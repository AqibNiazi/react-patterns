import { createContext, useContext } from "react";

const AccordionItemContext = createContext();
export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "AccordingItem related components must be used within an <AccordionItemProvider>"
    );
  }

  return context;
}

const AccordionItem = ({ id, className, children }) => {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
