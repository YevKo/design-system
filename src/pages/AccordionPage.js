import Accordion from '../components/accordions/Accordion'

function AccordionPage() {

    const accordionItems = [
        {
            id: 1,
            title: "Accordion 1",
            content: "This is Accordion 1 Content"
        },
        {
            id: 2,
            title: "Accordion 2",
            content: "This is Accordion 2 Content"
        },
        {
            id: 3,
            title: "Accordion 3",
            content: "This is Accordion 3 Content"
        },
    ];

    return (
        <div className="AccordionsPage">
            <Accordion items={accordionItems} />
        </div>
    );
}

export default AccordionPage;