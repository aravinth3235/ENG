import React from "react";

function Createtable(props) {
  return (
    <div>
      <tr>
        <td>
          <button>Delete</button>
        </td>
        <td>
          <button>Edit</button>
        </td>
        <td>
          <input
            type="date"
            defaultValue="2003-01-01"
            id="startdate"
            onChange={props.handlechange}
          />
        </td>
        <td>
          <input
            type="date"
            defaultValue="2055-01-01"
            id="enddate"
            onChange={props.handlechange}
          />
        </td>
        <td>
          <input
            type="text"
            pattern="[0-9]*"
            maxLength="2"
            id="totalwidth"
            onChange={props.handlechange}
          />
        </td>
        <td>
          <input
            type="text"
            pattern="[0-9]*"
            maxLength="5"
            id="endno"
            onChange={props.handlechange}
          />
        </td>
        <td>
          <input
            type="text"
            pattern="[0-9]*"
            maxLength="5"
            id="startno"
            onChange={props.handlechange}
          />
        </td>
        <td>
          <input
            type="checkbox"
            id="applicability"
            onChange={props.handlecheck}
          />
        </td>
        <td>
          <input
            type="checkbox"
            id="editdocdate"
            onChange={props.handlecheck}
          />
        </td>
        <td>
          <input type="checkbox" id="openstatus" onChange={props.handlecheck} />
        </td>
        <td>
          <button type="submit" onClick={props.handlesubmit}>
            ADD
          </button>
        </td>
      </tr>
    </div>
  );
}

export default Createtable;
