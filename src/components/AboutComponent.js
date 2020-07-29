import React from 'react';
import {ABOUT} from '../assets/data/about';
import {Button} from 'reactstrap';
function About(props){
    return(
        <div className="container-fluid">
            <div className="row">
            <div className="col-12 col-md-3 mb-4">
            <div className="card">
                    <h3 className="card-header bg-dark text-white">Education</h3>
                    <div className="card-body">
                       <dl className="row">
                           <dt className="col-6">Currently</dt>
                           <dd className="col-6">Pursuing btech cse in iit dhanbad</dd>
                           <dt className="col-6">12th grade</dt>
                           <dd className="col-6">Modern english school</dd>
                           <dt className="col-6">10th grade</dt>
                           <dd className="col-6">St. joseph's school</dd>
                           
                       </dl> 
                    </div>
                </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-3"></div>
                <div className="col-12 col-sm-6">
                    <div className="media">
                       <div className="media-body">
                          <h1 className="mt-5 mb-4">About Me</h1>
                          <h4> {ABOUT} </h4>
                       </div>
                    </div>
                </div>
            
                
        </div>
        <div className="row">
            <div className="col-12 col-md-3 offset-5">
              <a href="/skill">  <Button className="button">Skills</Button></a>
            </div>
        </div>
        </div>
    );
}
export default About;