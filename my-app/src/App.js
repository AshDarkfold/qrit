import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from "react-router";
import Auth from './components/Auth'

function App() {
    return (
        <div>
            <Auth />
        </div>
    )
}
export default App;