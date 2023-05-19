import React from "react";

function AddTable(props) {
  const edits = window.location.pathname.split("/")[1];
  return (
    <>
      {
        <tr className="trs" style={{ position: "relative" }}>
          {edits === "edit" && (
            <td>
              <button onClick={props.canceledit}>
                <img
                  alt=""
                  src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon-512.png"
                  style={{ maxHeight: "20px", border: "none" }}
                />
              </button>
            </td>
          )}
          {edits === "create" && (
            <td>
              <button onClick={props.canceladd}>
                <img
                  alt=""
                  src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon-512.png"
                  style={{ maxHeight: "20px", border: "none" }}
                />
              </button>
            </td>
          )}
          <td>
            {props.edit ? (
              <input
                type="date"
                defaultValue={
                  props.edit && props.editid === props.ediddata?.sequencekeyid
                    ? props.ediddata?.startdate
                    : ""
                }
                id="startdate"
                onChange={props.handlechange}
                readOnly={
                  props.edit && props.ediddata && !props.ediddata.editdocdate
                }
              />
            ) : (
              <input
                type="date"
                defaultValue={"2003-01-01"}
                id="startdate"
                onChange={props.handlechange}
                required={props.add}
              />
            )}
          </td>
          <td>
            {props.edit ? (
              <input
                type="date"
                defaultValue={
                  props.edit && props.editid === props.ediddata.sequencekeyid
                    ? props.ediddata.enddate
                    : ""
                }
                id="enddate"
                onChange={props.handlechange}
                readOnly={
                  props.edit && props.ediddata && !props.ediddata.editdocdate
                }
              />
            ) : (
              <input
                type="date"
                defaultValue={"2055-01-01"}
                id="enddate"
                onChange={props.handlechange}
                required={props.add}
              />
            )}
          </td>
          <td>
            <input
              type="text"
              pattern="[0-9]*"
              maxLength="2"
              id="totalwidth"
              defaultValue={
                props.edit && props.editid === props.ediddata.sequencekeyid
                  ? props.ediddata.totalwidth
                  : ""
              }
              onChange={props.handlechange}
              readOnly={props.edit}
              required={props.add}
            />
          </td>
          <td>
            <input
              type="text"
              pattern="[0-9]*"
              maxLength="5"
              id="startno"
              onChange={props.handlechange}
              defaultValue={
                props.edit && props.editid === props.ediddata.sequencekeyid
                  ? props.ediddata.startno
                  : ""
              }
              readOnly={props.edit}
              required={props.add}
            />
          </td>
          <td>
            <input
              type="text"
              pattern="[0-9]*"
              maxLength="5"
              id="endno"
              onChange={props.handlechange}
              defaultValue={
                props.edit && props.editid === props.ediddata.sequencekeyid
                  ? props.ediddata.endno
                  : ""
              }
              readOnly={props.edit}
              required={props.add}
            />
          </td>
          <td>
            <input
              type="checkbox"
              id="applicability"
              onChange={props.handlecheck}
              checked={
                props.edit && props.ediddata && props.ediddata.applicability
              }
              readOnly={props.edit}
            />
          </td>
          <td>
            <input
              type="checkbox"
              id="editdocdate"
              onChange={props.handlecheck}
              checked={
                props.edit && props.ediddata && props.ediddata.editdocdate
              }
              readOnly={props.edit}
            />
          </td>
          <td>
            <input
              type="checkbox"
              id="openstatus"
              onChange={props.handlecheck}
              checked={
                props.edit && props.ediddata && props.ediddata.openstatus
              }
              readOnly={props.edit}
            />
          </td>

          <button
            type="submit"
            style={{
              position: "absolute",
              zIndex: "5",
              backgroundColor: "#003f82",
              color: "#fff",
              marginLeft: "5px",
              borderRadius: "3px",
            }}
          >
            {props.edit ? "Update" : "Add"}
          </button>
        </tr>
      }
    </>
  );
}

export default AddTable;
