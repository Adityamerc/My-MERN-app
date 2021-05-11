import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from 'react-bootstrap';
import {connect} from 'react-redux'
import * as actionCreators from './actions/action'

import SignIn from './components/signin'
import AddUser from './components/signup'
import Pagination from './components/pagination/App'

//Reads thhe current port and changes the component accordingly
function App(){
  return(
    <Router>
      <Navbar />
        <br/>
          <Route path='/signin' exact component={SignIn} />
          <Route path='/signup' exact component={AddUser} />
          <Route path='/pagination' exact component={Pagination} />
    </Router>
  )
}

//connecting this to the redux store
const mapStateToProps=(state) => {
	return state
}

export default connect (mapStateToProps, actionCreators)(App)
