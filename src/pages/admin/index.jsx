import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const API_URL = "https://faustinomantovani-api.onrender.com/api/articles";
const AUTH_CHECK_URL = "https://faustinomantovani-api.onrender.com/api/auth/check";

export default function AdminPanel() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true); // Loading da checagem
  const router = useRouter();

  // Checagem de autenticação ao montar o componente
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch(AUTH_CHECK_URL, { credentials: "include" });
        if (!res.ok) {
          router.replace("/admin/login"); // Redireciona se não autenticado
        } else {
          setLoading(false);
          fetchArticles();
        }
      } catch (err) {
        router.replace("/login");
      }
    }
    checkAuth();
    // eslint-disable-next-line
  }, []);

  // Buscar artigos
  const fetchArticles = async () => {
    const res = await fetch(API_URL, { credentials: "include" });
    const data = await res.json();
    setArticles(data);
  };

  // Criar artigo
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ title, content, imageUrl, url }),
      });
      if (!res.ok) throw new Error("Erro ao criar artigo");
      setTitle("");
      setContent("");
      setImageUrl("");
      setUrl("");
      fetchArticles();
    } catch (err) {
      alert(err.message);
    }
  };

  // Deletar artigo
  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que deseja deletar este artigo?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Erro ao deletar artigo");
      fetchArticles();
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl">Verificando autenticação...</span>
      </div>
    );

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-brown3 text-center">
        Painel Admin
      </h1>

      {/* Formulário */}
      <form
        onSubmit={handleCreate}
        className="mb-12 bg-white shadow-lg p-6 rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Adicionar Artigo</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"
          required
        />
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"
          rows={4}
          required
        />
        <input
          type="text"
          placeholder="URL da Imagem"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Slug (url)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Criar
        </button>
      </form>

      {/* Lista de artigos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div key={article._id} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-bold text-brown3">{article.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{article.url}</p>
            <button
              onClick={() => handleDelete(article._id)}
              className="text-red-500 font-semibold hover:underline"
            >
              Deletar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}