import {INCREMENT, DECREMENT, RESET, CALL_API_TEST_SUCCESS} from './action';

/*
* 初始化state
 */

const initState = {
    count: 0
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        case RESET:
            return {count: 0};
        case CALL_API_TEST_SUCCESS:
            return {count: action.data.count};
        default:
            return state
    }
}
