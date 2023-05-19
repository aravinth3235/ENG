import React, { useEffect, useState } from "react";
import "./Createsequence.css";
import Service from "../Service.js/Service";
import Createtable from "./Createtable";
function Createsequence() {
  const [pop, setpop] = useState(false);
  const [on, seton] = useState({
    type: false,
    charset: false,
  });
  const [add, setadd] = useState(false);
  const [reload, setreload] = useState(false);
  const [type, settype] = useState([]);
  const [charset, setcharset] = useState([]);
  const [list, setlist] = useState();
  const [data, setdata] = useState({});
  const [charsetbytype, setcharsetbytype] = useState([]);
  const [charsets, setcharsets] = useState();
  useEffect(() => {
    Service.getType().then((res) => settype(res.data));
    if (list) {
      Service.getSequencebytype(list).then((res) => setcharset(res.data));
    }
    if (list && charsets) {
      Service.getSequenceandcharacterset(list, charsets).then((res) =>
        setcharsetbytype(res.data)
      );
    }
  }, [reload, list, charsets]);
  const filteredtype = type.filter(
    (e) => e.sequencetype && e.sequencetype.includes(list)
  );

  const uni = charsetbytype[0];
  const uni1 = type.filter(
    (x) => type.indexOf(x.sequencetype) === type.lastIndexOf(x.sequencetype)
  );
  const uni2 = charset.filter(
    (charset, index, self) =>
      index === self.findIndex((s) => s.charset === charset.charset)
  );

  const handlechange = (e) => {
    setdata({ ...data, [e.target.id]: e.target.value });
  };

  const handlecheck = (e) => {
    if (e.target.checked) {
      setdata({ ...data, [e.target.id]: true });
    } else {
      setdata({ ...data, [e.target.id]: false });
    }
  };

  const handlesubmit = () => {
    console.log(JSON.stringify(data));
    Service.postSequence(data).then((res) => {
      alert(res);
      setadd(false);
      setreload(true);
    });
  };

  return (
    <div className="container">
      {pop && (
        <div className="popuplist">
          <div className="content">
            {on.type &&
              !on.charset &&
              uni1.map((r) => {
                return (
                  <option
                    onClick={() => {
                      setpop(!pop);
                      setlist(r.sequencetype);
                    }}
                  >
                    {r.sequencetype}
                  </option>
                );
              })}

            {!on.type &&
              on.charset &&
              uni2.map((r) => {
                return (
                  <option
                    onClick={() => {
                      setpop(!pop);
                      setcharsets(r.charset);
                    }}
                  >
                    {r.charset}
                  </option>
                );
              })}
          </div>
        </div>
      )}
      <div style={pop ? { filter: "blur(2px)", zIndex: "-5" } : null}>
        <label>Sequence Type</label>
        <input
          type="text"
          defaultValue={filteredtype.map((e) => e.sequencetype)}
        />
        <button
          onClick={() => {
            setpop(!pop);
            seton({ type: true, charset: false });
          }}
        >
          0
        </button>
        <label>Sequence Name</label>
        <input type="text" defaultValue={filteredtype.map((e) => e.name)} />
        <label>Organization Level</label>
        <input type="text" defaultValue={filteredtype.map((e) => e.level)} />
        <label>Charset</label>
        <input type="text" defaultValue={uni && uni.charset} />
        <button
          onClick={() => {
            setpop(!pop);
            seton({ type: false, charset: true });
          }}
        >
          0
        </button>
        <label>Name</label>
        <input type="text" defaultValue={uni && uni.chardescription} />
        <label>Include Character set</label>
        <input type="checkbox" id="includecharset" onChange={handlecheck} />
        <button
          onClick={() => {
            setadd(true);
            setdata({
              ...data,
              sequencetype: list,
              charset: charsets,
              chardescription: uni.chardescription,
            });
          }}
        >
          ADD
        </button>
      </div>
      <div>
        <table>
          <thead className="thead-light">
            <tr>
              <th>Delete</th>
              <th>Edit</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Total Width</th>
              <th>Start No</th>
              <th>End No</th>
              <th>Auto ?</th>
              <th>Mod Dt ?</th>
              <th>Op ?</th>
            </tr>
          </thead>
          <tbody>
            {charsetbytype.map((r) => {
              return (
                <tr>
                  <td>
                    <button>
                      <img
                        alt=""
                        src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon-512.png"
                        style={{ maxHeight: "20px" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button>
                      <img
                        alt="edit"
                        src="https://www.iconshock.com/image/Beta/General/edit/"
                        style={{ maxHeight: "20px" }}
                      />
                    </button>
                  </td>
                  <td>{r.startdate}</td>
                  <td>{r.enddate}</td>
                  <td>{r.totalwidth}</td>
                  <td>{r.startno}</td>
                  <td>{r.endno}</td>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={r.applicability ? "checked" : ""}
                      readOnly
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={r.editdocdate ? "checked" : ""}
                      readOnly
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={r.openstatus ? "checked" : ""}
                      readOnly
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {add && (
          <Createtable
            handlechange={handlechange}
            handlecheck={handlecheck}
            handlesubmit={handlesubmit}
          />
        )}
      </div>
    </div>
  );
}

export default Createsequence;
