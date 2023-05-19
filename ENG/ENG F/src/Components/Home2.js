import React, { useEffect, useRef, useState } from "react";
import Service from "../Service.js/Service";
// import "../Pages/Createsequence.css";
import { useNavigate } from "react-router-dom";
import "./Home2.css";
import Swal from "sweetalert2";
function Home2() {
  const wins = window.location.pathname.split("/")[1];
  const inputElement = useRef();
  const inputElement1 = useRef();
  const nav = useNavigate();
  const [pop, setpop] = useState(false);
  const [on, seton] = useState({
    type: false,
    charset: false,
  });
  const [type, settype] = useState([]);
  const [charset, setcharset] = useState([]);
  const [list, setlist] = useState();
  const [charsetbytype, setcharsetbytype] = useState([]);
  const [charsets, setcharsets] = useState();
  const [seqdata, setseqdata] = useState({});
  const [sadd, setsadd] = useState(false);
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
  }, [list, charsets, sadd]);

  const uni = charsetbytype[0];

  const uni2 = charset.filter(
    (charset, index, self) =>
      index === self.findIndex((s) => s.charset === charset.charset)
  );
  const filteredtype = type.filter(
    (e) => e.sequencetype && e.sequencetype.includes(list)
  );

  const handlenav = () => {
    if (list && charsets) {
      if (wins === "create") {
        nav(`/create/${list}/${charsets}`);
      } else if (wins === "edit") {
        nav(`/edit/${list}/${charsets}`);
      } else if (wins === "view") {
        nav(`/view/${list}/${charsets}`);
      }
    }
  };

  const handlechange = (e) => {
    setseqdata({ ...seqdata, [e.target.id]: e.target.value });
  };
  const handlecheck = (e) => {
    if (e.target.id) {
      setseqdata({ ...seqdata, [e.target.id]: true });
    } else {
      setseqdata({ ...seqdata, [e.target.id]: false });
    }
  };
  const handlesubmit = (e) => {
    if (seqdata.chardescription && seqdata.charset) {
      Service.postSequenceonly(seqdata).then((res) => {
        if (res.data === "SUCCESS") {
          Swal.fire({
            color: "#fff",
            background: "#003f82",
            text: "Sequence Added",
            confirmButtonColor: "#003f82",
          });
          setsadd(false);
          setcharsets(seqdata.charset);
        } else {
          Swal.fire({
            color: "#fff",
            background: "#003f82",
            text: res.data,
            confirmButtonColor: "#003f82",
          });
        }

        // window.location.reload();
      });
    }
  };

  const matchPattern1 = (data, inputElement) => {
    if (data.charset) {
      const patt = /^[a-zA-Z]+$/;
      if (!patt.test(data.charset)) {
        Swal.fire({
          color: "#fff",
          text: "Write Alphabet Letters without space",
          background: "#003f82",
          confirmButtonColor: "#003f82",
        });
        inputElement.current.value = "";
      }
    }
  };

  const matchPattern2 = (data, inputElement) => {
    if (data.chardescription) {
      const patt = /^[a-zA-Z]+\s[a-zA-Z]+$/;

      if (!patt.test(data.chardescription)) {
        Swal.fire({
          color: "#fff",
          text: "Write Alphabet Letters with only one space",
          background: "#003f82",
          confirmButtonColor: "#003f82",
        });
        inputElement.current.value = "";
      }
    }
  };

  return (
    <div className="container">
      {wins === "create" && (
        <span className="spanaddsq">
          <button
            style={pop ? { filter: "blur(2px)", zIndex: "-5" } : null}
            onClick={() => {
              setsadd(true);
              setseqdata({
                ...seqdata,
                sequencetype: list,
              });
            }}
            className="addsq"
          >
            ADD Sequence
          </button>
        </span>
      )}

      {pop && (
        <div className="popuplist">
          <div className="content">
            {on.type && !on.charset && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setpop(false);
                  }}
                  style={{ marginBottom: "20px" }}
                >
                  Cancel
                </button>

                {type.map((r) => {
                  return (
                    <input
                      onClick={() => {
                        setpop(!pop);
                        setlist(r.sequencetype);
                      }}
                      value={r.sequencetype}
                      readOnly
                    />
                  );
                })}
              </>
            )}

            {!on.type && on.charset && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setpop(false);
                  }}
                  style={{ marginBottom: "20px" }}
                >
                  Cancel
                </button>
                {uni2.map((r) => {
                  return (
                    <input
                      onClick={() => {
                        setpop(!pop);
                        setcharsets(r.charset);
                      }}
                      value={r.charset}
                      readOnly
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}

      <div
        className="sec"
        style={pop ? { filter: "blur(2px)", zIndex: "-5" } : null}
      >
        <span className="sec-1">
          <label>Sequence Type</label>
          <span>
            <input
              type="text"
              defaultValue={filteredtype.map((e) => e.sequencetype)}
              readOnly
            />
            <button
              onClick={() => {
                setpop(!pop);
                seton({ type: true, charset: false });
              }}
              className="obtn btn-1"
            >
              <img
                alt=""
                src="https://cdn1.iconfinder.com/data/icons/ionicons-outline-vol-2/512/search-outline-512.png"
                style={{ maxHeight: "12px" }}
              />
            </button>
          </span>
          <label>Sequence Name</label>
          <input
            type="text"
            defaultValue={filteredtype.map((e) => e.name)}
            readOnly
          />
          <label>Organization Level</label>
          <input
            type="text"
            defaultValue={filteredtype.map((e) => e.level)}
            readOnly
          />
        </span>
        <br />
        <span className="sec-2">
          <label>Charset</label>
          <span>
            <input
              type="text"
              defaultValue={!sadd ? uni && uni.charset : ""}
              readOnly={!sadd}
              id="charset"
              onChange={handlechange}
              ref={inputElement}
              onBlur={sadd ? () => matchPattern1(seqdata, inputElement) : null}
            />
            <button
              onClick={() => {
                setpop(!pop);
                seton({ type: false, charset: true });
              }}
              disabled={sadd}
              className="obtn btn-2"
            >
              <img
                alt=""
                src="https://cdn1.iconfinder.com/data/icons/ionicons-outline-vol-2/512/search-outline-512.png"
                style={{ maxHeight: "12px" }}
              />
            </button>
          </span>
          <label>Name</label>
          <input
            type="text"
            id="chardescription"
            defaultValue={!sadd ? uni && uni.chardescription : ""}
            readOnly={!sadd}
            onChange={handlechange}
            ref={inputElement1}
            onBlur={sadd ? () => matchPattern2(seqdata, inputElement1) : null}
          />
          {sadd && (
            <span className="inscludechar">
              <label>Include Character set</label>
              <input
                type="checkbox"
                id="includecharset"
                disabled={!sadd}
                onChange={handlecheck}
              />
            </span>
          )}

          <button className="btn3" onClick={!sadd ? handlenav : handlesubmit}>
            {sadd ? "ADD" : "GO"}
          </button>
        </span>
      </div>
    </div>
  );
}

export default Home2;
