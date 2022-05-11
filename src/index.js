import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarApp } from './CalendarApp';
import '../src/components/styles.css'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <CalendarApp />
// );
ReactDOM.render(
  <CalendarApp/>,
  document.getElementById('root')
)
