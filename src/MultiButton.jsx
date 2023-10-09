export function MultiButton() {
    function handleButton(event) {
        console.log(event.target.name);
    }

    return (
        <div>
            <button name="one" onClick={handleButton}>Button One</button>
            <button name="two" onClick={handleButton}>Button Two</button>
            <button name="three" onClick={handleButton}>Button Three</button>
        </div>
    );
}
