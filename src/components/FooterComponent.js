import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Footer extends Component{
    render(){
        return(
            <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/skill">Skill</Link></li>
                        
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Contact</h5>
                    <address>
		              <i className="fa fa-phone fa-lg"></i>: 7488202771<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:pujakumarinwd0039@gmail.com">pujakumarinwd0039@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="https://m.facebook.com/profile.php?id=100038649653691&ref=content_filter"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/puja-kumari-0039"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        );
    }
}
export default Footer;