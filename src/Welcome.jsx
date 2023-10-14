import { Age } from "./Age";

export function Welcome({ name }) {
    return <div className="welcome">
        <p>Welcome, {name}!</p>
        <Age age={0} />
    </div>
}