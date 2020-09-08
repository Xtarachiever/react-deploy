import * as ActionTypes from './ActionTypes';
import {baseUrl} from './baseUrl';
export const addComment=(comment)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:comment
})
export const addFeedback=(feedback)=>({
    type:ActionTypes.ADD_FEEDBACK,
    payload:feedback
})
export const postComment = (dishId, rating, author, comment) => (dispatch)=> {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date=new Date().toISOString();
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};
export const postMessage = (firstname,lastname,telnum,email,agree,contactType,message) => (dispatch)=> {
    const newMessage = {
        firstname:firstname,
        lastname:lastname,
        telnum:telnum,
        email:email,
        agree:agree,
        contactType:contactType,
        message:message
    };
    newMessage.date=new Date().toISOString();
    return fetch(baseUrl +'feedback', {
        method: "POST",
        body: JSON.stringify(newMessage),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));
    return fetch(baseUrl+'dishes')
    .then(response=>{
        if(response.ok){
            return response;
        }
        else{
            var error=new Error('Error'+response.status+':'+response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>{
        var errmess=new Error(error.message);
        throw errmess;
    })
    .then(response=>response.json())
    .then(dishes=>dispatch(addDishes(dishes)))
    .catch(error=>dispatch(dishesFailed(error.message)))
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
export const fetchComments=()=>(dispatch)=>{
    return fetch(baseUrl+'comments')
    .then(response=>{
        if(response.ok){
            return response;
        }
        else{
            var error=new Error('Error'+response.status+':'+response.statusText);
            error.response=response;
            throw error;
        }
    },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(comments=>dispatch(addComments(comments)))
    .catch(error=>dispatch(commentsFailed(error.message)))
}
export const addComments=(comments)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
})
export const commentsFailed=(errMess)=>({
    type:ActionTypes.COMMENTS_FAILED,
    payload:errMess
})
export const fetchPromos=()=>(dispatch)=>{
    dispatch(loadingPromos());
    return fetch(baseUrl+'promotions')
    .then(response=>{
        if(response.ok){
            return response;
        }
        else{
            var error=new Error('Error'+response.status+':'+response.statusText);
            error.response=response;
            throw error;
        }
    },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(promotions=>dispatch(addPromos(promotions)))
    .catch(error=>dispatch(promosFailed(error.message)))
}
export const addPromos=(promotions)=>({
    type:ActionTypes.ADD_PROMOS,
    payload:promotions
})
export const promosFailed=(errMess)=>({
    type:ActionTypes.FAILED_PROMOS,
    payload:errMess
})
export const loadingPromos=()=>({
    type:ActionTypes.LOADING_PROMOS,
})
export const fetchLeaders=()=>(dispatch)=>{
    dispatch(loadingLeaders());
    return fetch(baseUrl+'leaders')
    .then(response=>{
        if(response.ok){
            return response;
        }
        else{
            var error=new Error('Error'+response.status+':'+response.statusText);
            error.response=response;
            throw error;
        }
    },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(leaders=>dispatch(addLeaders(leaders)))
    .catch(error=>dispatch(leadersFailed(error.message)))
}
export const addLeaders=(leaders)=>({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
})
export const leadersFailed=(errMess)=>({
    type:ActionTypes.FAILED_LEADERS,
    payload:errMess
})
export const loadingLeaders=()=>({
    type:ActionTypes.LOADING_LEADERS,
})