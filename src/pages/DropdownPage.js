import { useState } from 'react';
import Dropdown from '../components/dropdowns/Dropdown'

function DropdownPage() {
    // example data
    const Dropdowns = [
        {
            label: 'Select language',
            options: [
                { 'EN': 'English' },
                { 'FI' : 'Finnish' },
                { 'SV': 'Swedish' },
            ]
        },
    ];

    const [selected, setSelected] = useState(null);
    const handleSelect = (option) => {
        setSelected(option);
    }

    return (
        <div className="DropdownsPage">
            {Dropdowns.map((dropdown, index) => {
                return <div key={index}>
                    <Dropdown dropdown={dropdown} value={selected} onChange={handleSelect} />
                </div>
            })}
        </div>
    );
}

export default DropdownPage;