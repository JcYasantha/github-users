import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
