import React from 'react';

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs"

const AccordionItem = ({ title, children, index, activeIndex, onClick }) => {

    const isExpanded = index == activeIndex;

    return (
        <div className="flex flex-col justify-center">
            <button onClick={() => onClick(index)} className="flex w-1/2 text-lg justify-between px-8 py-4 mt-2 bg-blue-900 min-w-full">
                <div className="flex">
                    <div className="text-white font-bold">{title}</div>
                </div>
                <div className="flex text-white">
                    {isExpanded ? (
                        <BsFillArrowUpCircleFill className="w-8 h-8"/>
                        ) :
                        <BsFillArrowDownCircleFill className="w-8 h-8" />
                    }
                </div>
            </button>

            {isExpanded &&
                <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
                    {children}
                </div>
            }
        </div>
    );
};

export default AccordionItem;