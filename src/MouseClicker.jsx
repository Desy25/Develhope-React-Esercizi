export function MouseClicker() {
    function handleButton(event) {
        console.log(event.currentTarget.name)
    }
    function handleEvent(event) {
        console.log(event.currentTarget.src);
    }
    return <button name="one" onClick={handleButton}><img src="Button-Image" height={20} width={20} onClick={handleEvent} />Click here</button>
}

//Quando il "click" verrà eseguito sul tag img verranno comunque entrambi visualizzati in console per via dell'effetto "bubble" di html perchè img si trova all'interno del button.