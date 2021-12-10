import React, {useContext} from 'react';
import UserContext from "./UserContext";
function MovieRow(props) {
    const userContext = useContext(UserContext);

    return (
        <div>
      
            {userContext.currentUser ? userContext.currentUser.name : " "}
        </div>
    );
}

export default MovieRow;