import React, { Component } from 'react';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders'
import {Navbar, NavbarBrand} from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import {
    Switch,
    Route,
    Link, withRouter
  } from "react-router-dom";
  import DishDetailComponent from './DishDetailComponent';
  import MenuComponent from "./MenuComponent";
  import NavBarComponent from './NavBarComponent';
  import AboutComponet from './AboutComponet';
import ServicesComponet from './ServicesComponet';
import ContactComponent from './ContactComponent';
import {connect} from 'react-redux';
import {addComment, fetchDishes, fetchLeaders,fetchComments } from '../redux/Actions/actionCreator';
import LoadingComponent from './LoadingComponent';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const mapStateToProps = (state)=>{
    return {
        dishes: state.dishes,
        leaders: state.leaders,
        comments: state.comments,
        promotions: state.promotions,
        isModelOpen: state.isModelOpen
    }
}

const mapDispatchToProps = (dispatch)=> ({
    addComment: (dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
    fetchdishes: () => { dispatch(fetchDishes())},
    fetchLeaders: () => {dispatch(fetchLeaders())},
    fetchComments : () => {dispatch(fetchComments())}
});

class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModelOpen: false
        }
        this.ToggleModel = this.ToggleModel.bind(this);
    } 

    ToggleModel = ()=>{
        this.setState({
            isModelOpen: !this.state.isModelOpen
        });
    }

    componentDidMount(){
        this.props.fetchdishes();
        this.props.fetchLeaders();
        this.props.fetchComments();
    }

    render()
     {

       const DishDetail= ({match})=>{
        return(
        <DishDetailComponent dish={this.props.dishes.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId,10))[0]}
        toggleModel={this.ToggleModel} toggle={this.state.isModelOpen}
         addComment={this.props.addComment}
         dishesloading={this.props.dishes.isDishLoading} 
         errmessage={this.props.dishes.errmess}

        > 
        </DishDetailComponent>
            );
        
        }

        if( this.props.dishes.isDishLoading){
            return <LoadingComponent />
        }
        else if (this.props.dishes.errmess) {

            return (
                <div className="container">
                    <div className="row">
                        <h3>{this.props.dishes.errmess}</h3>
                    </div>
                </div>
            );
        }
        else {
        return (
            <div>     
         <NavBarComponent></NavBarComponent>
         <TransitionGroup>
             <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                
                <Switch>
                    <Route  path="/about" component={()=><AboutComponet leaders= {this.props.leaders.leaders} />}></Route>
                    <Route path="/services" component={ServicesComponet}></Route>
                    <Route  path ='/contact' component={ContactComponent }></Route>
                    <Route path ='/dish/:dishId' component={DishDetail}></Route>
                    <Route exact path ='/' component={()=> <MenuComponent dishes={this.props.dishes.dishes}></MenuComponent>
                    }></Route>
            </Switch>
        </CSSTransition>
      </TransitionGroup> 
         </div>
        )
    }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));
