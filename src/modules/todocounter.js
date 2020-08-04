const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos); 


export const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // nextId 1씩 더하기
}, []);
 
export const onRemove = useCallback(id => {
    dispatch({ type: 'REMOVE', id });
}, []);
 
export const onToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE', id });
}, []);

function createBulkTodos() {
    const nextId = useRef(2501);
    const array = [];
    for (let i = 1; i <= 2500; i++) {
      array.push({
        id: i,
        text: `할 일 ${i}`,
        checked: false,
      });
    }
    return array;
}
   
function todoReducer(todos, action) {
    switch (action.type) {
      case 'INSERT': // 새로 추가
        { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
        return todos.concat(action.todo);

      case 'REMOVE': // 제거
        { type: 'REMOVE', id: 1 }
        return todos.filter(todo => todo.id !== action.id);

      case 'TOGGLE': // 토글
        { type: 'REMOVE', id: 1 }
        return todos.map(todo =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
        );

      default:
        return todos;
    }
}


export default todoReducer; 


