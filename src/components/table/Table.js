
function Table({ data }) {
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    <th className="p-2">Name</th>
                    <th className="p-2">Color</th>
                    <th className="p-2">Age</th>
                </tr>
            </thead>
            <tbody>
                { data.map((user, index) => {
                    return (
                    <tr key={index} className="border-b-2">
                        <td className="p-2">{user.name}</td>
                        <td className="p-2">{user.age}</td>
                        <td className="p-2"><div className={ `p-3 m-2 ${user.color}` }></div></td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;