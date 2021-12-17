import "./footerTable.css"

export const FooterTable = () => {
    const tableContents = [
        ["About us", "Help center", "Newsletter"], 
        ["Our charter", "Our rulers", "Kicstarter Magazine"], 
        ["Stats", "Creators Resource", "The Creative Independent"],
        ["Press", "Forward Funds", "Mobile Apps"],
        ["Jobs", "Brand assets", "Research"]
    ]
    return (
        <table className="footertd">
            <thead>
            <tr className="table-row">
                <th className="head-cell">ABOUT</th>
                <th className="head-cell">SUPPORT</th>
                <th className="head-cell">MORE FROM KICKSTARTER</th>
            </tr>
            </thead>
            <tbody>
            {
                tableContents.map((ele, j) => {
                    return (
                        <tr className="table-row" key={j}>
                            {
                                ele.map((e, i) => {
                                    return (
                                        <td className="each-cell" key={i}>{ e }</td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}