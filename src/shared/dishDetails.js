import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments.map((commentObj) => {
                let date = new Date(commentObj.date).toString().split(" ");
                return (
                    <li key={commentObj.id}>
                        <p>{commentObj.comment}</p>
                        <p>-- {commentObj.author}, {date[1]} {date[2]}, {date[3]}</p>
                    </li>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;export const DETAILS =
   [
        {
        id: 0,
        rating: 5,
        comment: "Imagine all the eatables, living in conFusion!",
        author: "John Lemon",
        date: "2012-10-16T17:57:28.556094Z"
        },
        {
        id: 1,
        rating: 4,
        comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
        author: "Paul McVites",
        date: "2014-09-05T17:57:28.556094Z"
        },
        {
        id: 2,
        rating: 3,
        comment: "Eat it, just eat it!",
        author: "Michael Jaikishan",
        date: "2015-02-13T17:57:28.556094Z"
        },
        {
        id: 3,
        rating: 4,
        comment: "Ultimate, Reaching for the stars!",
        author: "Ringo Starry",
        date: "2013-12-02T17:57:28.556094Z"
        },
        {
        id: 4,
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: "25 Cent",
        date: "2011-12-02T17:57:28.556094Z"
        }
    ]