import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";
import { Fragment } from "react";
import Card from "./Card";

const App = () => {
  return (
    <Fragment>
      <p>
        Now I can render any React component on any DOM node I want using
        ReactDOM.render
      </p>
      
      <BrowserRouter>
        <Routes>            
          <Route path="/" element={<Card />} />
          <Route path="/form" element={<Form />} />
          <Route path="/formRef" element={<FormRef />} />
          <Route path="/formState" element={<FormState />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
