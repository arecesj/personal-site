import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer';
import Footer from './Footer';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="App" style={{ marginLeft: '5%', marginRight: '5%' }}>
        {/* Reactstrap Nav */}
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/">Juan Areces</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/arecesj">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/* Routes */}
        <Switch>
          <Route exact path="/" render={() => <HomeContainer />} />
          <Route exact path="/about" render={() => <AboutContainer />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
