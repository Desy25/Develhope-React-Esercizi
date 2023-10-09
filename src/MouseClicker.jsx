export function MouseClicker() {
    function handleButton(event) {
        console.log(event.currentTarget.name)
    }
    function handleEvent(event) {
        console.log(event.currentTarget.src);
        event.stopPropagation();
    }
    return <button name="one" onClick={handleButton}><img src="Button-Image" height={20} width={20} onClick={handleEvent} />Click here</button>
}
// Per evitare che l'attributo name del pulsante venga stampato nella console quando si fa clic sull'immagine, è possibile fermare la propagazione dell'evento chiamando il metodo stopPropagation dell'oggetto event all'interno della funzione handleEvent.