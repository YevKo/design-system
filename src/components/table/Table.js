function Table({ data, config }) {

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {
                        config.map((column) => {
                            return <th key={column.label} className="p-2">{column.label}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                { data.map((rawData, index) => {
                    return (
                        <tr key={index} className="border-b-2">
                            {
                                config.map((column, index) => {
                                    return <td key={index} className="p-2">{column.render(rawData)}</td>
                                })
                            }
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;