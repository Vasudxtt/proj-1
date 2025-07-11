import { useContext,createContext}  from "react";

export const TodoContext = createContext({
  todos:[{
    id:1,
    todo:'todo1',
    completed:false
  }],
  addTodo :(todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toogleComplete:(id)=>{}
})


export const useTodo =()=>{
  return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider