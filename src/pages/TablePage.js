import Table from '../components/table/Table'
import users from './users.json';

function TablePage() {
    return (
        <div className="TablePage">
            <Table data={users.users} />
        </div>
    );
}

export default TablePage;