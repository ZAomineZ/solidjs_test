// // @ts-nocheck
// /* @refresh reload */
// import "./index.css";
// import {render} from "solid-js/web";
// import {useForm} from "./validation";
// import {createStore} from "solid-js/store";
//
// const EMAILS = ['johnsmith@outlook.com', 'mary@gmail.com', 'vincent@gmail.com']
//
// function fetchUserName(name: string) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(EMAILS.indexOf(name) > -1), 200)
//     })
// }
//
// const ErrorMessage = (props) => <span class="error-message">{props.error}</span>;
//
// function App() {
//     const {validate, formSubmit, errors} = useForm({
//         errorClass: "error-input"
//     })
//     const [fields, setFields] = createStore()
//     const fn = (form) => {
//         console.log('Done')
//     }
//
//     const userNameExists = async ({value}) => {
//         const exists = await fetchUserName(value)
//         return exists && `${value} is already being used`
//     }
//
//     const matchesPassword = ({value}) => {
//         return value === fields.password ? false : "Passwords must Match"
//     }
//
//     return (
//         <>
//             <form>
//                 <h1>Sign Up</h1>
//                 <div class="field-block">
//                     <input type="email" name="email" placeholder="Email..." required use:validate={[userNameExists]}/>
//                     {errors.email && <ErrorMessage error={errors.email}/>}
//                 </div>
//                 <div class="field-block">
//                     <input type="password" name="password" placeholder="Password..." minlength={8}
//                            onInput={(e) => setFields("password", e.currentTarget.value)} use:validate required/>
//                     {errors.password && <ErrorMessage error={errors.password}/>}
//                 </div>
//                 <div class="field-block">
//                     <input type="password" name="confirmPassword" placeholder={"Confirm Password"}
//                            use:validate={[matchesPassword]} required/>
//                     {errors.confirmPassword && (
//                         <ErrorMessage error={errors.confirmPassword} />
//                     )}
//                 </div>
//
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     );
// }
//
// render(App, document.body);
