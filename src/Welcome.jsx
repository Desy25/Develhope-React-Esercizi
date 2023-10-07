export function Welcome({ name = "Violante"}) {
    return <p>Welcome, {name}!</p>
}

// Specificando name = "Violante" nei parametri del componente, viene impostato il valore predefinito per la prop name. Se in seguito viene fornito un valore quando si utilizza il componente, questo sovrascriverà il valore predefinito; in caso contrario, verrà utilizzato il valore predefinito.