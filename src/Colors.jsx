function Color({ item }) {
    return <li>{item.name}</li>
}


export function Colors({ items }) {
    return <ul>{items.map((color) => <Color key={color.id} item={color} />)}</ul>
}