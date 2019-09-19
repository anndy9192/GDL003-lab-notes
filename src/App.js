import React from 'react';
import './App.css';
import Login from "./Components/login";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import 'react-mdl/extra/material.js'
import 'react-mdl/extra/material.css';
import AppRoutes from './Components/routes'
import { Link } from 'react-router-dom'


export default function App() {

    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Remember Notes" scroll>
            <Navigation>
              <Link to="/home">Home</Link>
              <Link to="/login">Login</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/home">Home</Link>
              <Link to="/login">Login</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <AppRoutes />
          </Content>
        </Layout>
      </div>
    )
  
}


