import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "../Service.js/Service";
import Table from "./Table";
import AddTable from "./AddTable";
import Swal from "sweetalert2";
import "./AddSequence.css";
function AddSequence() {
  const wins = window.location.pathname.split("/")[1];
  const { type } = useParams();
  const { sequencecharset } = useParams();
  const [data, setdata] = useState([]);
  const [edit, setedit] = useState(false);
  const [editid, seteditid] = useState();
  const [adddata, setadddata] = useState({
    startdate: "2003-01-01",
    enddate: "2055-01-01",
  });
  const [stype, setstype] = useState([]);
  const [add, setadd] = useState(false);
  const [ediddata, setediddata] = useState({});

  useEffect(() => {
    if (sequencecharset && type) {
      Service.getType().then((res) => setstype(res.data));
      Service.getSequenceandcharacterset(type, sequencecharset).then((res) =>
        setdata(res.data)
      );
    }
    if (edit && editid) {
      Service.getSequencekeyid(editid).then((res) => {
        setediddata(res.data);
      });
    }
  }, [type, sequencecharset, edit, editid, add]);

  const filteredtype = stype.filter(
    (e) => e.sequencetype && e.sequencetype.includes(type)
  );

  const uni = data[0];

  const handlechange = (e) => {
    if (edit) {
      setediddata({ ...ediddata, [e.target.id]: e.target.value });
    } else {
      setadddata({ ...adddata, [e.target.id]: e.target.value });
    }
  };

  const handlecheck = (e) => {
    if (e.target.checked) {
      setadddata({ ...adddata, [e.target.id]: true });
    } else {
      setadddata({ ...adddata, [e.target.id]: false });
    }
  };

  const editfunc = (edidid) => {
    setedit(true);
    seteditid(edidid);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (edit) {
      const isStartDateGreaterThanEndDate =
        ediddata.startdate > ediddata.enddate;
      if (isStartDateGreaterThanEndDate) {
        Swal.fire({
          color: "#fff",
          background: "#003f82",
          title: "Ooops...",
          text: "Start date should be lesser than End date",
          confirmButtonColor: "#003f82",
        });
      }
      try {
        await Service.putSequencebyid(ediddata); // Assuming `ediddata` is the sequence data object
        Swal.fire({
          color: "#fff",
          background: "#003f82",
          text: "Sequence Updated",
          confirmButtonColor: "#003f82",
        });
        setedit(false);
      } catch (error) {
        // Handle error if necessary
      }
    }

    if (add) {
      const isStartNoGreaterThanEndNo =
        parseInt(adddata.startno) > parseInt(adddata.endno);
      const isStartDateGreaterThanEndDate = adddata.startdate > adddata.enddate;

      if (isStartNoGreaterThanEndNo) {
        Swal.fire({
          color: "#fff",
          background: "#003f82",
          title: "Ooops...",
          text: "Start No should be lesser than End No",
          confirmButtonColor: "#003f82",
        });
      } else if (isStartDateGreaterThanEndDate) {
        Swal.fire({
          color: "#fff",
          background: "#003f82",
          title: "Ooops...",
          text: "Start date should be lesser than End date",
          confirmButtonColor: "#003f82",
        });
      } else {
        try {
          const response = await Service.postSequence(adddata); // Assuming `adddata` is the sequence data object
          if (response.data === "SEQUENCE_ALREADY_EXISTS") {
            Swal.fire({
              color: "#fff",
              text: "Sequence already exists",
              background: "#003f82",
              confirmButtonColor: "#003f82",
            });
          } else if (response.data === "SUCCESS") {
            Swal.fire({
              color: "#fff",
              text: "Success",
              background: "#003f82",
              confirmButtonColor: "#003f82",
            });
            setadd(false);
          }
        } catch (error) {
          // Handle error if necessary
        }
      }
    }
  };

  const canceledit = () => {
    setedit(false);
  };
  const canceladd = () => {
    setadd(false);
  };
  return (
    <div className="addcontainer">
      <span className="section">
        <span className="sec-11">
          <label>Sequence Type</label>
          <input type="text" defaultValue={uni && uni.sequencetype} />
          <label>Sequence Name</label>
          <input
            type="text"
            defaultValue={filteredtype.map((e) => e.name)}
            readOnly
          />
          <label>Oraganization Level</label>
          <input
            type="text"
            defaultValue={filteredtype.map((e) => e.level)}
            readOnly
          />
        </span>
        <br />
        <span className="sec-12">
          <label>Characacter Set</label>
          <input type="text" defaultValue={uni && uni.charset} readOnly />
          <label>Characacter Name</label>
          <input
            type="text"
            defaultValue={uni && uni.chardescription}
            readOnly
          />
          <label>Include charset</label>
          <input type="checkbox" checked={uni && uni.includecharset} readOnly />
          {wins === "create" && (
            <button
              onClick={() => {
                setadd(true);
                setadddata({
                  ...adddata,
                  sequencetype: type,
                  charset: sequencecharset,
                  chardescription: uni.chardescription,
                });
              }}
            >
              ADD
            </button>
          )}
        </span>
      </span>
      <div className="container-xxl tb">
        <form onSubmit={handleSubmit}>
          <table className="table table-responsive-lg table-striped">
            <thead className="thead-light">
              <tr>
                {wins === "edit" || (wins === "create" && <th>Delete</th>)}
                {wins === "edit" && <th>Edit</th>}
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
              <Table
                data={data}
                handlechange={handlechange}
                handlecheck={handlecheck}
                editid={editid}
                edit={edit}
                editfunc={editfunc}
                ediddata={ediddata}
                canceledit={canceledit}
              />
              {add && (
                <AddTable
                  handlechange={handlechange}
                  handlecheck={handlecheck}
                  canceladd={canceladd}
                  add={add}
                />
              )}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default AddSequence;
