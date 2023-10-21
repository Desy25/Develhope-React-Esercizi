import { useState } from "react"

export function useLogin(onLogin) {
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

  function handleSubmit(event) {
    event.preventDefault();
    handleLogin();
  }

  return {
    data: data,
    input : handleInput,
    reset : handleReset,
    submit : handleSubmit
  }
}
