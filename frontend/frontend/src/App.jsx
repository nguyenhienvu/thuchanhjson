import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Admin_router from './routers/Admin_router';
import './App.css'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

function App() {

  return (
    <div id='App'>
      <div id='Admin_router'>
          <Admin_router />
      </div>
    </div>
  )
}

export default App

