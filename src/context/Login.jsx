import React, {useContext} from 'react';
import UserContext from './UserContext';

function Login(props) {
    const userContext = useContext(UserContext);
    return (
        <div>
            <button style={{margin:'2rem 0'}} onClick={() => userContext.onLogin("username")}>Login</button>
        </div>
    );
}

export default Login;