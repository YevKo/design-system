import { useState, useEffect, useRef } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

function Dropdown({ dropdown, value, onChange } ) {

    const [isExpanded, setExpanded] = useState(false);
    const dropdownEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!dropdownEl.current) {
                return;
            }

            (!dropdownEl.current.contains(event.target)) && setExpanded(false) ;
        }

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };

    }, []);

    const handleDropdownOpen = () => {
        setExpanded(!isExpanded);
    }

    const handleOptionSelected = (option) => {
        setExpanded(!isExpanded);
        onChange(option);
    }

    return (
        <div ref={dropdownEl} className="dropdown inline-block relative">
            <button onClick={handleDropdownOpen} className="font-semibold outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                <span className="pr-1">{ value ? value : dropdown.label} </span>
                { isExpanded ? <MdArrowDropUp/>: <MdArrowDropDown/>}
            </button>
            {isExpanded ? (<ul className="bg-white border rounded-sm transform transition duration-150 ease-in-out origin-top min-w-32 cursor-pointer">
                {dropdown.options.map((option, i) => {
                    return <li className="px-3 py-1 hover:bg-gray-100" onClick={(event)=> {handleOptionSelected(event.target.innerText)}} key={Object.keys(option)}>
                        {Object.values(option)}
                    </li>
                })}
            </ul>) : null }
        </div>
    );

}

export default Dropdown;