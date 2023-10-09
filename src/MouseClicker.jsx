export function MouseClicker() {
    function handleButton(event) {
        console.log(event.currentTarget.name)
    }
    return <button name="one" onClick={handleButton}><img height={20} width={20} />Click here</button>
}