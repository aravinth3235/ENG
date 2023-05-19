import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  return (
    <div className="homes">
      <button onClick={() => nav("/create")}>Create</button>
      <button onClick={() => nav("/edit")}>Modify</button>
      <button onClick={() => nav("/view")}>Query</button>
    </div>
  );
}

export default Home;
