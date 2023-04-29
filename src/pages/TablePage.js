import SortableTable from '../components/table/SortableTable'
import users from './users.json';

function TablePage() {
    const config = [
        {
            label: "Name",
            render: (user) => user.name,
            sortValue: (user) => user.name
        },
        {
            label: "Age",
            render: (user) => user.age,
            sortValue: (user) => user.age
        },
        {
            label: "Color",
            render: (user) => <div className={ `p-3 m-2 ${user.color}` }></div>
        }
    ];

    const keyFn = (user) => {
        return user.name;
    };

    return (
        <div className="TablePage">
            <SortableTable data={users.users} config={config} keyFn={keyFn}/>
        </div>
    );
}

export default TablePage;