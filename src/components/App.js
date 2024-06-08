import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// Import your form components

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link id="form-link" to="/form">Form</Link>
          </li>
          <li>
            <Link id="form-ref-link" to="/form-ref">Form Ref</Link>
          </li>
          <li>
            <Link id="form-state-link" to="/form-state">Form State</Link>
          </li>
        </ul>
      </nav>
      <p>
        Now I can render any React component on any DOM node I want using
        ReactDOM.render
      </p>
      <Route path="/form" component={Form} />
      <Route path="/form-ref" component={FormRef} />
      <Route path="/form-state" component={FormState} />
    </Router>
  );
}

export default App;