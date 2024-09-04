import { useState } from "react";
import MenuItem from "./MenuItem.jsx";
// import "./App.css";
import Header from "./Header.jsx";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import Props from "./Props.jsx";
import NewProps from "./NewProps.jsx";
function Description() {
  return <></>;
}
function App() {
  return (
    <>
      {/* <Props name="Raj Mishra" fatherName="Sunil Mishra" />
      <Props
        name="Shyam Mishra"
        fatherName="vinay Mishra"
        siblings={["Mohit Pathak", " Amit Pathak"]}
      /> */}
      <NewProps first="Good Morning" second="Raj Mishra" third=" theek ho?" />
    </>
  );
}

export default App;
