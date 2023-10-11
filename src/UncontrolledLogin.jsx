export function UncontrolledLogin() {
    function handleUncontrolledForm(event) {
        event.preventDefault();

        // Primo metodo tramite FormData

        // const formData = new FormData(event.target);

        // const data = {
        //     username : formData.get("username"),
        //     password : formData.get("password"),
        //     session : formData.get("session") === "on" ? true : false 
        // }

        
        // Secondo metodo per accedere ai valori del form

        const username = event.target.elements.namedItem("username").value;
        const password = event.target.elements.namedItem("password").value;
        const session = event.target.elements.namedItem("session").checked;

        const data = {
            username,
            password,
            session
        }


        // L'API standard per accedere ai dati dei moduli è la DOM API , nello specifico utilizzando l'oggetto FormData.
        // Ma esistono anche approcci non standard e meno utilizzati, come l'accesso diretto agli elementi del modulo tramite il loro attributo name.



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