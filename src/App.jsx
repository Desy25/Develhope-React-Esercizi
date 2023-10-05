
export function App() {
    function helloName(name) {
        return <h1>Hello, {name}</h1>
    }
    const jsxExpression = <span>Jules</span>
    return helloName(jsxExpression);
}

// Se la variabile name contiene un'espressione JSX invece di una stringa, l'espressione JSX verrà trattata come il valore della variabile name e verrà incorporata all'interno del JSX restituito. In sostanza il risultato non cambia.