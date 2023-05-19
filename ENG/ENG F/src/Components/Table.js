import React, { Fragment } from "react";
import AddTable from "./AddTable";

function Table(props) {
  const edits = window.location.pathname.split("/")[1];
  const dateChanger = (date) => {
    const pattern = /^\d{4}-\d{2}-\d{2}$/g;

    if (pattern.test(date)) {
      return date.split("-").reverse().join("-");
    } else {
      return date;
    }
  };
  return (
    <>
      {props.data.map((s) => {
        if (s.startdate === null && s.enddate === null && s.totalwidth === 0) {
          return null;
        } else {
          return (
            <Fragment key={s.sequencekeyid}>
              {props.edit && props.editid === s.sequencekeyid ? (
                <AddTable
                  handlechange={props.handlechange}
                  handlecheck={props.handlecheck}
                  ediddata={props.ediddata}
                  edit={props.edit}
                  editid={props.editid}
                  canceledit={props.canceledit}
                />
              ) : (
                <tr key={s.sequencekeyid}>
                  {edits === "create" ? (
                    <td>
                      <button>
                        <img
                          alt=""
                          src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon-512.png"
                          style={{ maxHeight: "20px", border: "none" }}
                        />
                      </button>
                    </td>
                  ) : (
                    <></>
                  )}
                  {edits === "edit" && (
                    <td>
                      {edits === "edit" && (
                        <button onClick={() => props.editfunc(s.sequencekeyid)}>
                          <img
                            alt="edit"
                            src="https://www.iconshock.com/image/Beta/General/edit/"
                            style={{ maxHeight: "20px", border: "none" }}
                          />
                        </button>
                      )}
                    </td>
                  )}

                  <td>{dateChanger(s.startdate)}</td>
                  <td>{dateChanger(s.enddate)}</td>
                  <td>{s.totalwidth}</td>
                  <td>{s.startno}</td>
                  <td>{s.endno}</td>
                  <td>
                    <input type="checkbox" checked={s.applicability} readOnly />
                  </td>
                  <td>
                    <input type="checkbox" checked={s.editdocdate} readOnly />
                  </td>
                  <td>
                    <input type="checkbox" checked={s.openstatus} readOnly />
                  </td>
                </tr>
              )}
            </Fragment>
          );
        }
      })}
    </>
  );
}

export default Table;
