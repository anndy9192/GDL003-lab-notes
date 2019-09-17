import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
//import Title from './Components/Holi';
import Login from "./Components/login";
import Hello from './Components/configdb';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import 'react-mdl/extra/material.js'
import 'react-mdl/extra/material.css';
import AppRoutes from './Components/routes'
import { Link } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Remember Notes" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/">Home</Link>
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
}

export default App;
