import React, { Component } from "react";
import Login from "./context/Login";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/UserContext";

class App extends Component {
  handleLogin = (username) => {
    console.log("Get user data from the server:" + username);
    const user = { name: "John Doe" };
    this.setState({ currentUser: user });
  };
  state = { currentUser: null };
  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLogin: this.handleLogin,
        }}
      >
        <div style={{ margin: "5rem" }}>
          <MoviePage />
          <Login/>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
