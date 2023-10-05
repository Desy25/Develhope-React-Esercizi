
export function App() {
    function helloName(name) {
        return <h1>Hello, {name}</h1>
    }
    return helloName();
}

// Se non passo la variabile semplicemente mi ritornerà la stringa "Hello, ", perchè il parametro non è stato definito.