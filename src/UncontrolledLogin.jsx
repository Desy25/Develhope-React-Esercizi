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

        // L'API FormData semplifica il processo di raccolta dei dati dai campi del modulo. 
        // Include automaticamente tutti i controlli del modulo, compresi input di tipo testo, input di tipo password, checkbox ecc,
        // senza la necessità di specificarli manualmente. E' più semplice da utilizzare e si risparmia tempo.
        // L'API FormData è ben supportata nei browser moderni, ma alcuni browser più vecchi potrebbero non supportarla completamente.
        // Inoltre non è adatta a dati che non sono associati a moduli HTML. 


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