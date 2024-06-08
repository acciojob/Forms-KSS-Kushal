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
      <form id="info-form">
            <input type="text" id="full_name" placeholder='Full Name' />
            <input type="email" id="email" placeholder='Email'/>
            <input type="password" id="password" placeholder='Password' />
            <input type="password" id="password_confirmation" placeholder='Password Confirmation' />
            <button type='submit' onClick={()=>navigate('/form-ref')}>Submit</button>
        </form>
      <BrowserRouter>
        <Routes>            
          <Route path="/" element={<Card />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form-ref" element={<FormRef />} />
          <Route path="/form-state" element={<FormState />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
