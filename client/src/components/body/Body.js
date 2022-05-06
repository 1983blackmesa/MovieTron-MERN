import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'

import ForgotPass from '../body/auth/ForgotPassword'
import ResetPass from '../body/auth/ResetPassword'

import Profile from '../body/profile/Profile'
import EditUser from '../body/profile/EditUser'

import Home from '../body/home/Home'
import About from '../body/about/About'
import Contact from '../body/contact/Contact'

import MoviesInsert from './profile/MoviesInsert'
import MoviesList from './profile/MoviesList'
import MoviesUpdate from './profile/MoviesUpdate'


import {useSelector} from 'react-redux'



function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    return (
        <section>
            <Switch>
                <Route path="/" component={Home} exact />

                <Route path="/about" component={About} exact />

                <Route path="/contact" component={Contact} exact />

                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                <Route path="/profile/MoviesInsert" component={isAdmin ? MoviesInsert : NotFound } exact />
                <Route path="/profile/MoviesList" component={isLogged ? MoviesList : NotFound } exact />
                
                <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />

                <Route path="/movies/update/:id" component={isAdmin ? MoviesUpdate : NotFound } exact />

            </Switch>
        </section>
    )
}

export default Body