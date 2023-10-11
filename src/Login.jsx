import { useState } from "react"

export function Login({onLogin}) {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    function handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;
        setData((d) => {
            return {
                ...d,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleLogin() {
        onLogin(data);
      }

      function handleReset() {
        setData({
          username: "",
          password: "",
          remember: false,
        });
      }

    return (
        <div>
            <input type="text" name="username" value={data.username} onChange={handleInput} />
            <input type="password" name="password" value={data.password} onChange={handleInput} />
            <input type="checkbox" name="remember" checked={data.remember} onChange={handleInput} />
            <button disabled={!data.username || !data.password} onClick={handleLogin} >Login</button>
            <button onClick={handleReset}>Reset</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}