import React from 'react';
import Layout from "../component/layout";
import {Route} from 'react-router-dom';



const DefaultLayout = props => {
    const {component: Component, ...rest} = props;
    return (
        <Layout>
            <Component {...rest}/>
        </Layout>
    )
};



const PublicRoute = ({component: Component, ...rest})=> {
    return(
        <Route {...rest} render={props => {
            return (
                <DefaultLayout {...props} component={Component} />
            )
        }} />
    )
};

export {DefaultLayout, PublicRoute};
