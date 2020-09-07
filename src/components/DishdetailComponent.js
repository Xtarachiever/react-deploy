import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem, Button,Col, ModalHeader,Modal,ModalBody,Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Errors, LocalForm, Control } from "react-redux-form";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../redux/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required=(val)=>val && val.length;
const minLength=(len)=>(val)=>val && (val.length>=len)
const maxLength=(len)=>(val)=>!val || (val.length<=len)

class CommentForm extends Component{
    constructor(props){
        super(props);

        this.state={
           isModalOpen:false
    }
    this.toggleModal=this.toggleModal.bind(this)
    this.submitComment=this.submitComment.bind(this)
    }
    toggleModal(){
        this.setState({isModalOpen:!this.state.isModalOpen})
    }
    submitComment(values){
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil fa-lg"></span>
                <span> Submit Comment   </span></Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Comment Form</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.submitComment(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" id="rating" name="rating" className="col-12 form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="author">
                                        Your Name
                                    </Label>
                                    <Control.text model=".author" className="col-12 form-control" name="author" id="author" placeholder="Name"
                                    validators={
                                        {required,minLength:minLength(3),maxLength:maxLength(10)}
                                    }/>
                                    <Errors className="text-danger" 
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required:"Required",
                                        minLength:"Must be greater than 3",
                                        maxLength:"Must be less than 10"
                                    }
                                    }/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col >
                                    <Label htmlFor="comment">Comments</Label>
                                    <Control.textarea model=".comment" rows="6" className="col-12 form-control" name="comment" id="comment" placeholder="Comments"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:1}}>
                                  <Button className="btn-success">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
            
        )
    }
}
    function RenderDish({dish}) {
        return (
            <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)'}}>
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }

    function RenderComments({comments,postComment,dishId}){
        if(comments!=null){
            return(
                <div className="col-12 col-md-7 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    <Stagger in>
                        {comments.map((comment)=>{
                            return(
                                <Fade>
                                    <li key={comment.Id}>
                                        <p>{comment.comment}</p>
                                        <p>--{comment.author},{new Intl.DateTimeFormat('en-us',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                </Fade>
                            );
                        })}
                    </Stagger>
                    </ul>
                    <CommentForm dishId={dishId} postComment={postComment}/>
                </div>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }
    const DishDetail=(props)=> {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                           <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                           <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id} />
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

export default DishDetail;
