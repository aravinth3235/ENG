import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  return (
    <div>
      <button onClick={() => nav("/create")}>Create</button>
      <button>Modify</button>
      <button>Query</button>
    </div>
  );
}

export default Home;
