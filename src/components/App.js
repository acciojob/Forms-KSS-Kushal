import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <p>
        Now I can render any React component on any DOM node I want using
        ReactDOM.render
      </p>
      <Link id="form-link" to={'/form'}>form</Link>
      <Link id="form-ref-link" to={'/formRef'}>formRef</Link>
      <Link id="form-state-link" to={'/formState'}>formState</Link>
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/formRef" element={<FormRef />} />
          <Route path="/formState" element={<FormState />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
