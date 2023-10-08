import { Age } from "./Age";

export function Welcome({ name, welcomeAge }) {
    return <div>
        <p>Welcome, {name}!</p>
        {((welcomeAge > 18 && welcomeAge < 65) && name === "John")  && <Age age={welcomeAge} />}
    </div>
}