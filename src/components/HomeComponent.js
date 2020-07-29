import React from 'react';
import '../App.css';
import ReactTypingEffect from 'react-typing-effect';
function Home(props){
    
        return(
        
                
            <div className="container-fluid " id="home">
            
                <div className="row ">
                <div className="col-sm-2 m-5">
                
            </div>
            <div className="col-sm-7 offset-2 mt-8">
              
            </div>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-4 ">
            <ReactTypingEffect text= "Hi! I'm Puja" className="typing"/>
            </div>
            </div>
            <div className="row">
                <div className="col-12" id="text2">Welcome to my portfolio</div>
            </div>
            </div>
            
        );
        
    
    
}
export default Home;