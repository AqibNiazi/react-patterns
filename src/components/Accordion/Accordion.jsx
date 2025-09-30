import { createContext } from "react";

const AccordionContext = createContext();

export function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "According related components must be used within an AccordionProvider"
    );
  }
  return context;
}

const Accordion = ({ className, children }) => {
  const [openItemId, setOpenItemId] = useState();

  const openItem = (id) => {
    setOpenItemId(id);
  };
  const closeItem = () => {
    setOpenItemId(null);
  };

  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>;
    </AccordionContext.Provider>
  );
};

export default Accordion;
