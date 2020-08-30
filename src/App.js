import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Users from "./components/users/Users";
import User from "./components/users/User";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  getUser = async (login) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  };

  getRepos = async (login) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ repos: res.data, loading: false });
  };

  searchUsers = async (text) => {
    if (text) {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      this.setState({ users: res.data.items, loading: false });
    }
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/github-users'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClearButton={
                        this.state.users.length > 0 ? true : false
                      }
                    />
                    <Users
                      users={this.state.users}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )}
              />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getRepos={this.getRepos}
                    user={this.state.user}
                    repos={this.state.repos}
                    loading={this.state.loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
