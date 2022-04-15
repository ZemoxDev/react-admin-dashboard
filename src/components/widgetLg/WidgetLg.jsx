import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton" + " " + type}>{type}</button>
  }

  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle"> Latest Transactions </h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={require('../../frau.jpg')} alt="frau" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$112.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>

          <tr className="widgetLgTr">
            <th className="widgetLgTh">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={require('../../frau.jpg')} alt="frau" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$112.00</td>
            <td className="widgetLgStatus"><Button type="Declined"/></td>
          </tr>

          <tr className="widgetLgTr">
            <th className="widgetLgTh">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={require('../../frau.jpg')} alt="frau" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$112.00</td>
            <td className="widgetLgStatus"><Button type="Pending"/></td>
          </tr>

          <tr className="widgetLgTr">
            <th className="widgetLgTh">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={require('../../frau.jpg')} alt="frau" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$112.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
        </table>
    </div>
  )
}