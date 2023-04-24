import Table from '../components/table/Table'
import users from './users.json';

function TablePage() {
    const config = [
        {
            "label": "Name",
            "render": (user) => user.name
        },
        {
            "label": "Age",
            "render": (user) => user.age
        },
        {
            "label": "Color",
            "render": (user) => <div className={ `p-3 m-2 ${user.color}` }></div>
        }
    ];
    return (
        <div className="TablePage">
            <Table data={users.users} config={config}/>
        </div>
    );
}

export default TablePage;