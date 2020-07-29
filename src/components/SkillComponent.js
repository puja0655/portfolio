import React,{Component} from 'react';
import {SKILLS} from '../assets/data/skill';
import {Card,CardImg,CardTitle,CardText} from 'reactstrap';
import {FadeTransform} from 'react-animation-components';
class Dumb extends Component{
    constructor(props){
        super(props);
        this.state={
            skills:SKILLS
        }
    }
    
    render(){
        const lo=this.state.skills.map((skill)=>{
            return(
                <div className="col-12 col-sm-4 mt-5">
                <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>    
                <Card key={skill.id} className="m-5 align-self-center" id="card">
            
                <CardImg className="align-center" width="100px" height="200px" id="card-img" src={skill.image} alt={skill.name} />
                <CardTitle className="m-3">{skill.name}</CardTitle>
                <CardText><h3>{skill.description}</h3></CardText>
               
              </Card>
              </FadeTransform>
              </div>
                
            );
        })
        return(
            <div className="container-fluid">
            <div className=" row aign-self-center">
                
                    {lo}
                
            </div>
            </div>
        );
    }
}
export default Dumb;