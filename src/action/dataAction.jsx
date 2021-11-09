import * as api from '../api'
import { FETCH_ALL } from '../constants/actionTypes'

export const getData = () => async(dispatch) => {
    try {
        const {data} = await api.fetchData()

        dispatch({
            type : FETCH_ALL,
            payload : data
        }) // dispatch is coming form redux-thunk also the aysn (dispatch)
    } catch (error) {
        console.log(error.message)
    }
}