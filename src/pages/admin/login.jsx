import { useState } from "react";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://faustinomantovani-api.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // importante para cookies
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        // Login bem-sucedido
        router.push("/admin/"); // redireciona para painel
      } else {
        const data = await res.json();
        setError(data.message || "Erro ao fazer login");
      }
    } catch (err) {
      console.error(err);
      setError("Erro de conexão com a API");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brown2">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-brown3 mb-6 text-center">
          Login Admin
        </h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 border border-brown2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown3"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border border-brown2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown3"
            required
          />
          <button
            type="submit"
            className="bg-brown3 text-beige px-4 py-2 rounded-lg font-semibold hover:bg-brown1 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
