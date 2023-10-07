import { Age } from "./Age";

export function Welcome({ name, welcomeAge }) {
    return <div>
        <p>Welcome, {name}!</p>
        {welcomeAge > 18 && <Age age={welcomeAge} />}
    </div>
}