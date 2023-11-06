import React, { Component } from 'react'
//import App from '../App'


export default class extends Component {
  render() {
    return (
      <div className="container mt-5">
      <table className="table custom-table">
        <tbody>
          <tr>
            <td className="col-5" rowSpan="2" colSpan="3">
            <img src="image-11.jpg" alt="Large Column" className="table-image" />
            </td>
            <td className="small-column"><img src={`image-1.jpg`} alt="Add image"  className="table-image" /></td>
            <td className="small-column"><img src={`image-2.jpg`} alt="Add image"  className="table-image" /></td>
            <td className="small-column"><img src={`image-3.jpg`} alt="Add image"  className="table-image" /></td>
          </tr>
          <tr>
            <td className="small-column"><img src={`image-4.jpg`} alt="Add image"  className="table-image" /></td>
            <td className="small-column"><img src={`image-5.jpg`} alt="Add image"  className="table-image" /></td>
            <td className="small-column"><img src={`image-6.jpg`} alt="Add image"  className="table-image" /></td>
          </tr>
          <tr>
            <td className="small-column"><img src={`image-7.jpg`} alt="Add image"  className="table-image" /></td>
            <td className="small-column"><img src={`image-8.jpg`} alt="Add image"  className="table-image" /></td>
            <td className="small-column"><img src={`image-9.jpg`} alt="Add image"  className="table-image" /></td>
            <td className="small-column"><img src={`image-10.jpg`} alt="Add image"  className="table-image" /></td>
            <td className="small-column"><img src={`image-2.jpg`} alt="Add image"  className="table-image" /></td>
            <td className="small-column"><img src="" alt="Add image" className="table-image" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

