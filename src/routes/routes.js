import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import { Home,Dashboard } from '../pages';
import { userSelect } from '../redux/userSlice';

export const Router =()=> {

    let user = useSelector(userSelect);
    return (
        <Routes >
        <Switch >
            <Route path="/" exact component={Home}/>
            <Route path="/books" exact component={ ()=>user ? <Dashboard auth={user}/> :<Home/>}/>
        </Switch>

        </Routes>

    )
}


