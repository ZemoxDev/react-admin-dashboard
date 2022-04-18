import React from 'react'
import "./shipping.css"

export default function Shipping() {

  const Button = ({type}) => {
    return <button className={"shippingButton" + " " + type}>{type}</button>
  }

  return (
    <div className="shipping">
      <div className="shippingContainer">
        <h2 className="shippingTitle">Shipping</h2>
        <table className="shippingTable">
          <tr className="shippingTr">
            <td className="shippingUser">
              <span className="shippingName">Product 1</span>
            </td>
            <td className="shippingDate">4 Jun 2021</td>
            <td className="shippingAmount">$182.00</td>
            <td className="shippingStatus"><Button type="Shipped"/></td>
          </tr>

          <tr className="shippingTr">
            <td className="shippingUser">
              <span className="shippingName">Product 1</span>
            </td>
            <td className="shippingDate">2 Jun 2021</td>
            <td className="shippingAmount">$182.00</td>
            <td className="shippingStatus"><Button type="Canceled"/></td>
          </tr>

          <tr className="shippingTr">
            <td className="shippingUser">
              <span className="shippingName">Product 4</span>
            </td>
            <td className="shippingDate">7 Jul 2021</td>
            <td className="shippingAmount">$18.00</td>
            <td className="shippingStatus"><Button type="Pending"/></td>
          </tr>

          <tr className="shippingTr">
            <td className="shippingUser">
              <span className="shippingName">Product 2</span>
            </td>
            <td className="shippingDate">8 Aug 2021</td>
            <td className="shippingAmount">$112.00</td>
            <td className="shippingStatus"><Button type="Shipped"/></td>
          </tr>
        </table>
      </div>
    </div>
  )
}
