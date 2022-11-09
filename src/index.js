import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useEffect } from 'react';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray', margin: 0, padding: '5px 10px', width: 'max-content', minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px', border: '1px solid #F0F8FF', borderRadius: '15px', width: 'max-content', marginBottom: '40px'
    }, inputs: {
      marginBottom: '5px'
    }, submitBtn: {
      marginTop: '10px', padding: '10px 15px',
      border: 'none', backgroundColor: 'lightseagreen', fontSize: '14px', borderRadius: '5px'
    }
  }
}

const initialValue = {
  userFirstname: 'Coder',
  userLastname: 'Byte',
  userPhone: 8885559999
}

function PhoneBookForm({ handleChange, handleSubmit }) { // { addEntryToPhoneBook }
  return (
    <form onSubmit={handleSubmit}>
      <label>First name:</label> <br />
      <input style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        onChange={handleChange}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input style={style.form.inputs}
        className='userLastname' name='userLastname' type='text'
        onChange={handleChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input style={style.form.inputs} className='userPhone' name='userPhone' type='text'
        onChange={handleChange} />
      < br />
      <input style={style.form.submitBtn} className='submitButton' type='submit' value='Add User' />
    </form>
  )
}
function InformationTable(props) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> <tr> <th style={style.tableCell}>First name</th>
        <th style={style.tableCell}>Last name</th>
        <th style={style.tableCell}>Phone</th>
      </tr>
      </thead>
    </table>)
}

function Application(props) {
  const [inputs, setInputs] = useState({});
  const [allInputs, setAllInputs] = useState([initialValue]);
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    console.log(inputs);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setAllInputs([...allInputs, inputs])
    console.log(allInputs);
  }
  return (
    <section>
      <PhoneBookForm handleChange={onHandleChange} handleSubmit={handleSubmit} />
      <InformationTable />
    </section>)
}

const App1 = (props) => {
  const [counter, setCounter] = useState();
  useEffect(() => {
    console.log('Hello');
    // setCounter(1);
  }, [props.visible]);
  return <div>{"" + counter}</div>
}

const App2 = () => {
  const [counter] = useReducer((s = 3) => s, 1);

  console.log('useReducer', counter);

  return <div />
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return state + 1;
    }
    case 'double': {
      return state * 2;
    }
    default: {
      return state;
    }
  }
}
const MyComponent = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  const fire = () => {
    ['increment', 'double', 'reset', 'increment', 'double'].forEach((type) => dispatch({ type }));
  }
  return <button onClick={fire}>{counter}</button>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Application />
    <App1 visible={true} />
    <App2 />
    <MyComponent />
  </>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();