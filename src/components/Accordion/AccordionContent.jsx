import { useAccordionContext } from "./Accordion";
const AccordionContent = ({ id, children, className }) => {
  const { openItemId } = useAccordionContext();

  const isOpen = openItemId === id;
  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
};
export default AccordionContent;
