export function Age({ age }) {
    return (age > 18) ? (<p>Your age is {age} years old.</p>): (<p>You are very young!</p>)
}