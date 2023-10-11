export function Colors({ items }) {
    return <ul>{items.map((color) => <li key={color}>{color}</li>)}</ul>
}