import { combineReducers } from 'redux';
import counter from './counter';
import todocounter from './todocounter';

//createStore 함수를 사용하여 스토어를 만들 때
//리듀서를 하나만 사용
//기존에 만든 리듀서들을 통합
//리덕스에서 제공하는 combineReducers 유틸 함수 이용

const rootReducer = combineReducers({
    counter,
    todocounter
})

export default rootReducer;