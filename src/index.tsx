import {createResource, createSignal} from "solid-js";
import {render} from "solid-js/web";

const fetchUser = async (id: string) => (await fetch(`https://swapi.dev/api/people/${id}`)).json()

function App() {
    const [userId, setUserId] = createSignal("")
    const [user] = createResource(userId, fetchUser)

    return <>
        <input type="number" min="1" placeholder="Enter Numeric ID" onInput={(e) => setUserId(e.currentTarget.value)}/>
        <span>{user.loading && "Loading..."}</span>
        <div>
            <pre>{JSON.stringify(user(), null, 2)}</pre>
        </div>
    </>
}

render(App, document.getElementById('root'))