import { FETCH_ALL } from '../constants/actionTypes'

export default (user = [], action) => {
    switch (action.type) {
        
        case FETCH_ALL:
            return action.payload;
            
    
        default: // need this for default case
        return user 
    }
}