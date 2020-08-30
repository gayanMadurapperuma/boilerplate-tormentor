import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button'
import {testLoginActions} from '../../../actions/login';


const Login = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(testLoginActions());
    }, [dispatch]);

    return (
        <div>
            <h2>Login</h2>
            <Button variant="primary" size="lg" disabled={false} onClick={() => console.warn('testing')}>
                Primary button
            </Button>
        </div>
    )
}

export default Login;