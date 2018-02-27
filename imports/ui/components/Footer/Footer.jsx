import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Footer } from 'react-materialize';

class FooterMain extends Component {
    render() { 
        return ( 
            <Footer copyrights="&copy 2015 Copyright Text"
                moreLinks={
                    <NavLink activeClassName="active" exact to="/">Home</NavLink>
                }
                links={
                    <ul>
                        <li className="grey-text text-lighten-3"><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                        <li className="grey-text text-lighten-3"><NavLink activeClassName="active" exact to="/About">About</NavLink></li>
                        <li className="grey-text text-lighten-3"><NavLink activeClassName="active" exact to="/JesaisPas">JesaisPas</NavLink></li>
                        <li className="grey-text text-lighten-3"><NavLink activeClassName="active" exact to="/test">test</NavLink></li>
                    </ul>
                }
                className='example'
            >
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </Footer>
        )
    }
}
 
export default FooterMain;