import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    errMess:null,
    comments:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            console.log("Comment: ", comment);
            return {...state,comments:state.comments.concat(comment),errMess:null};
        case ActionTypes.COMMENTS_FAILED:
            return{...state,comments:[],errMess:action.payload}
        default:
          return state;
      }
};