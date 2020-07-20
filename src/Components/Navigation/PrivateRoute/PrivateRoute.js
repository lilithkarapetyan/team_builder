import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const PrivateRoute = (props) => (
       
    <div>
        {props.isAuth ? <>auth {props.children}</> :
            <Redirect to={{
                pathname: "/auth",
                state: { from: props.path }
            }} /> }
    </div>
);

const mapStateToProps = (state) => {
    return { isAuth: !!state.token }
}

export default connect(mapStateToProps)(PrivateRoute);