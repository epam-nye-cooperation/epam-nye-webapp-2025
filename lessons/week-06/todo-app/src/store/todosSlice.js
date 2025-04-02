import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, text: 'Learn React', isCompleted: true },
  { id: 2, text: 'Learn React Router', isCompleted: false },
  { id: 3, text: 'Learn React Query', isCompleted: false },
];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.length ? state[state.length - 1].id + 1 : 1,
        text: action.payload,
        isCompleted: false,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer