import * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
    isLoading:true,
    errMess:null,
    promotions:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.LOADING_PROMOS:
            return{...state,isLoading:true,errMess:null,promotions:[]}
        case ActionTypes.ADD_PROMOS:
            return{...state,isLoading:false,errMess:null,promotions:action.payload}
        case ActionTypes.FAILED_PROMOS:
            return{...state,isLoading:false,errMess:action.payload,promotions:[]}
        default:
          return state;
      }
};