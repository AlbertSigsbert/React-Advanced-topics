import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/UserContext";

class App extends Component {
  state = { currentUser: {name : "AM"}};
  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div style={{margin:'5rem'}}>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
