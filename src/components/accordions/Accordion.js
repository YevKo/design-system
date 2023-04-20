import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

function Accordion( { items }) {

  const [activeIndex, setActiveIndex] = useState(0);
  const handleSetIndex = (nextIndex) => {
    setActiveIndex(currentActiveIndex => {
      return  currentActiveIndex === nextIndex ? -1 : nextIndex;
    });
  }

  const renderedAccordions = items.map((item, index) => {
      return <div key={index}>
        <AccordionItem
            title={item.title}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex
            onClick={handleSetIndex}
          >
            {item.content}
        </AccordionItem>
    </div>
  });

  return renderedAccordions;

};
export default Accordion;