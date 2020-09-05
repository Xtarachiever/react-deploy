import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponents';
import About from './AboutComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { postComment, fetchDishes,fetchComments,fetchLeaders,fetchPromos,postMessage } from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postMessage:(firstname,lastname,telnum,email,agree,contactType,message)=>dispatch(postMessage(firstname,lastname,telnum,email,agree,contactType,message)),
  fetchDishes: () => { dispatch(fetchDishes())}, resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: ()=>{dispatch(fetchComments())},fetchLeaders: ()=>{dispatch(fetchLeaders())},
  fetchPromos: ()=>{dispatch(fetchPromos())}

});

class Main extends Component {

  
componentDidMount() {
  this.props.fetchDishes();
  this.props.fetchComments();
  this.props.fetchLeaders();
  this.props.fetchPromos();
}

  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErr={this.props.promotions.errMess}
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leadLoading={this.props.leaders.isLoading} leadFail={this.props.leaders.errMess}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            postComment={this.props.postComment} commentsErr={this.props.comments.errMess}
          />
      );
    };
    
 
    return (
      <div>
        <Header />
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={500}>
              <Switch>
                <Route path='/home' component={HomePage}/>
                <Route exact path='/menu' component={()=><Menu dishes={this.props.dishes}/>} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path="/contactus" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} postMessage={this.props.postMessage}/>}/>
                <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders}/>}/>
                <Redirect to="/home"/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));