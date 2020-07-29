import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Dumb from './SkillComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import {Route,Redirect,Switch} from 'react-router-dom';

class Main extends Component{
    
    render(){
        return(
          <div>
              <Header/>
              <TransitionGroup>
              <CSSTransition classNames="page" timeout={300}>
              <Switch>
              <Route path='/home' component={Home}/>
              <Route exact path='/skill' component={Dumb}/>
              <Route exact path="/about" component={About}/>
              <Redirect to='/home'/>
              </Switch>
              </CSSTransition>
              </TransitionGroup>
              <Footer/>
              
          </div>
        );
    }

}
export default Main;