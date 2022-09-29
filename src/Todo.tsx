// /* @refresh reload */
// import './index.css'
// import {For, render} from 'solid-js/web';
// import {batch, createSignal} from "solid-js";
// import {createLocalStore, removeIndex} from "./utils";
//
// type TodoItem = {
//     title: string,
//     done: boolean
// }
//
// function App() {
//     const [title, setTitle] = createSignal<string>("")
//     const [todos, setTodos] = createLocalStore<TodoItem[]>("todos", [])
//
//     const addTodo = (e: SubmitEvent) => {
//         e.preventDefault()
//
//         batch(() => {
//             setTodos(todos.length, {
//                 title: title(),
//                 done: false
//             })
//             setTitle("")
//         })
//     }
//
//     return <>
//         <h3>Simple Todos Example</h3>
//         <form onSubmit={addTodo}>
//             <input placeholder="Enter todo and click +" type="text" value={title()}
//                    onInput={(e) => setTitle(e.currentTarget.value)} required/>
//             <button>+</button>
//         </form>
//         <For each={todos}>
//             {(todo, i) => (
//                 <div>
//                     <input type="checkbox" checked={todo.done}
//                            onChange={(e) => setTodos(i(), "done", e.currentTarget.checked)}/>
//                     <input type="text" value={todo.title}
//                            onChange={e => setTodos(i(), "title", e.currentTarget.value)}/>
//                     <button onClick={() => setTodos((t) => removeIndex(t, i()))}>X</button>
//                 </div>
//             )}
//         </For>
//     </>
// }
//
// render(App, document.body)