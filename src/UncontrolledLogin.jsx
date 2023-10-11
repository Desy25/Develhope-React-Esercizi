export function UncontrolledLogin() {
    function handleUncontrolledForm(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = {
            username : formData.get("username"),
            password : formData.get("password"),
            session : formData.get("session") === "on" ? true : false 
        }

        console.log(data);
    }
    return (
        <form onSubmit={handleUncontrolledForm}>
            <h2>My uncontrolled form</h2>
            <input name="username" type="text" />
            <input name="password" type="password" />
            <input name="session" type="checkbox" />
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}