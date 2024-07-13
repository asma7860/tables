import React from 'react'

function Tables(props) {
  return (
    <div className="main">
        <table className="table">
            <caption>{props.marks}</caption>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Max.Marks</th>
                    <th>Marks Obtained</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Telugu</td>
                    <td>100</td>
                    <td>{props.telmarks}</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Hindi</td>
                    <td>100</td>
                    <td>{props.hinmarks}</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>100</td>
                    <td>{props.engmarks}</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Maths</td>
                    <td>100</td>
                    <td>{props.matmarks}</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Science</td>
                    <td>100</td>
                    <td>{props.scimarks}</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Social Studies</td>
                    <td>100</td>
                    <td>{props.socmarks}</td>
                    <td>Pass</td>
                </tr>
            </tbody>
            <tfoot >
                <tr>
                    <td className="total">Percentage</td>
                    <td className="total">{props.percentage}</td>
                    <td className="total">Total Marks</td>
                    <td className="total">{props.totmarks}</td>
                </tr>
                <tr>
                    <td>Result</td>
                    <td>Pass</td>
                    <td>Out Off</td>
                    <td>600</td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default Tables