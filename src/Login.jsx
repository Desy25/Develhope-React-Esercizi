import { useLogin } from "./useLogin"

export function Login({onLogin}) {

  const {data, input, reset, submit} = useLogin(onLogin);

    return (
      <form onSubmit={submit}>
          <div>
            <input type="text" name="username" value={data.username} onChange={input} placeholder="username" />
            <input type="password" name="password" value={data.password} onChange={input} placeholder="password"/>
            <input type="checkbox" name="remember" checked={data.remember} onChange={input} />
            <button disabled={!data.username || !data.password} type="submit" style={{
              backgroundColor: data.password.length < 8 ? "red" : "green"
            }} >Login</button>
            <button onClick={reset}>Reset</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </form>
    )
}