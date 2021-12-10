import React, { Component } from "react";
import MovieRow from "./MovieRow";
import UserContext from "./UserContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    // console.log("Context", this.context);  
  }
  

  render() {
    return (
      <UserContext.Consumer>
        { userContext => <div>{userContext.currentUser ? userContext.currentUser.name : " "} Movie List <MovieRow/></div>}
      </UserContext.Consumer>
    );
  }
}


export default MovieList;
