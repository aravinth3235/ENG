import React, { useEffect, useState } from "react";

function Navs() {
  const [date, setdate] = useState("");
  const Todaydate = Date().slice(0, 25);
  useEffect(() => {
    const interval = setInterval(() => {
      setdate(Todaydate);
    }, 1000);
    return () => clearInterval(interval);
  }, [Todaydate]);

  return (
    <div className="navs">
      <h3>Sequence Generation Setup</h3>
      <p>
        <span>Date : </span> {date}
      </p>
    </div>
  );
}

export default Navs;
