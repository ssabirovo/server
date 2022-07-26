import React from "react";
import ReactDOM from "react-dom/client";
import ListTree from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));

const list = [
  {
    title: "Front-End",
    subs: [
      { title: "React JS" },
      { title: "Angular JS" },
      {
        title: "Vue JS",
        subs: [
          { title: "PDP-B-19" },
          { title: "PDP-B-18", subs: [{ title: "Arslonbek" }] },
        ],
      },
    ],
  },
  { title: "Back-End" },
  { title: "Mobile Development" },
];

root.render(<ListTree list={list} />);
