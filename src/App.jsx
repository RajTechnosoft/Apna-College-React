import { useState } from "react";
import MenuItem from "./MenuItem.jsx";
import "./App.css";
import Header from "./Header.jsx";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import Props from "./Props.jsx";
function Description() {
  return <></>;
}
function App() {
  return (
    <>
      {" "}
      let study={{ a: "B.Sc.", b: "B.A." }}
      <Props name="Raj Mishra" fatherName="Sunil Mishra" />
      <Props
        name="Shyam Mishra"
        fatherName="vinay Mishra"
        siblings={["Mohit Pathak", " Amit Pathak"]}
      />
    </>
  );
}

export default App;
