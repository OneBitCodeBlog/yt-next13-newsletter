"use client"

import { useState } from "react"

export default function SubscribeForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch("/api/subscribers", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json())

    console.log(response)

    if (response.created) {
      setEmail("")
      alert("Email cadastrado com sucesso!")
    } else {
      alert("Algo deu errado!")
    }
  }

  return (
    <form
      className="flex justify-center gap-4 p-4"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Seu e-mail principal"
        className="bg-slate-800 p-3 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-sky-700 p-3 rounded">
        Se inscrever
      </button>
    </form>
  )
}