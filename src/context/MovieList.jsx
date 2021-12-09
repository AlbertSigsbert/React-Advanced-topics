import React, { Component } from "react";
import UserContext from "./UserContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("Context", this.context);  
  }
  

  render() {
    return (
      <UserContext.Consumer>
        { userContext => <div>{userContext.name} Movie List</div>}
      </UserContext.Consumer>
    );
  }
}


export default MovieList;
