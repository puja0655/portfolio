import React from 'react';
function About(props){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-3 m-8">
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
        </div>
    );
}
export default About;