import React from 'react';
import { connect } from 'react-redux';
//액션 함수 가져오기
import {todos, onInsert, onRemove, onToggle} from './modules/todocounter';
import TodoTemplate from '../componentsTodo/TodoTemplate';
import TodoInsert from '../componentsTodo/TodoInsert';
import TodoList from '../componentsTodo/TodoList';

const TodosContainer = ({
    input,
    todos,
    onInsert,
    onToggle,
    onRemove
}) => {
    return(
    <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
    );
};

export default connect(
    ({input, todos}) => ({
        input: todos.input,
        todos: todos.action
    }),
    //디스패치 액션 함수 실행
    {
        onInsert,
        onToggle,
        onRemove
    }
)(TodosContainer);



