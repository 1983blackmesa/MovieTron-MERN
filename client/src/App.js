import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction'

import Header from './components/header/Header'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])


  return (
    <Router>
      <Switch>
      <div className="App">
     
        <Header />
        <Body />
        <br/>
        <br/>
        <br/>
        <Footer />
        
        

      </div>
     
      </Switch>
    </Router>
  );
}

export default App;