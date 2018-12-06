export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";
export const CALL_API_TEST_SUCCESS = 'CALL_API_TEST_SUCCESS'
export const CALL_API_TEST_FAILURE = 'CALL_API_TEST_FAILURE'

export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function reset() {
    return {type: RESET}
}

import { post, get } from '../../util/fetch'
export const callApiTest = () => dispatch => {
   get({
    url: 'http://localhost:3004/callAPiTest',
    success: CALL_API_TEST_SUCCESS,
    failure: CALL_API_TEST_FAILURE,
    dispatch
   })
}

//等同于
// export const callApiTest = () => {
//     return dispatch => {
//         get({
//         url: 'http://localhost:3004/callAPiTest',
//         success: CALL_API_TEST_SUCCESS,
//         failure: CALL_API_TEST_FAILURE,
//         dispatch
//         })
//     }
// }