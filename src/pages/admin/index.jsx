import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const API_URL = "https://faustinomantovani-api.onrender.com/api/articles";
const AUTH_CHECK_URL = "https://faustinomantovani-api.onrender.com/api/auth/check";
const LOGOUT_URL = "https://faustinomantovani-api.onrender.com/api/auth/logout";

export default function AdminPanel() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null); // ID do artigo sendo editado
  const router = useRouter();

  // Checagem de autenticação ao montar
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch(AUTH_CHECK_URL, { credentials: "include" });
        if (!res.ok) {
          router.replace("/admin/login");
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

  // Criar ou editar artigo
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // Editar artigo
        const res = await fetch(`${API_URL}/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ title, content, imageUrl, url }),
        });
        if (!res.ok) throw new Error("Erro ao editar artigo");
      } else {
        // Criar artigo
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ title, content, imageUrl, url }),
        });
        if (!res.ok) throw new Error("Erro ao criar artigo");
      }
      clearForm();
      fetchArticles();
    } catch (err) {
      alert(err.message);
    }
  };

  // Preencher formulário para editar
  const handleEdit = (article) => {
    setEditId(article._id);
    setTitle(article.title);
    setContent(article.content);
    setImageUrl(article.imageUrl);
    setUrl(article.url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Cancelar edição
  const handleCancelEdit = () => {
    clearForm();
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

  // Limpar formulário e sair do modo edição
  const clearForm = () => {
    setEditId(null);
    setTitle("");
    setContent("");
    setImageUrl("");
    setUrl("");
  };

  // Logout
  const handleLogout = async () => {
    try {
      await fetch(LOGOUT_URL, { method: "POST", credentials: "include" });
    } catch {}
    router.replace("/admin/login");
  };

  // Voltar ao site
  const handleGoToSite = () => {
    router.push("/"); // ou a rota pública desejada
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl">Verificando autenticação...</span>
      </div>
    );

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-brown3 text-center">
          Painel Admin
        </h1>
        <div className="flex gap-2">
          <button
            onClick={handleGoToSite}
            className="bg-gray-200 text-brown3 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Voltar ao site
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="mb-12 bg-white shadow-lg p-6 rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editId ? "Editar Artigo" : "Adicionar Artigo"}
        </h2>
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
        <div className="flex gap-2">
          <button
            type="submit"
            className={`${
              editId
                ? "bg-yellow-600 hover:bg-yellow-700"
                : "bg-green-600 hover:bg-green-700"
            } text-white px-6 py-2 rounded-lg`}
          >
            {editId ? "Salvar Alterações" : "Criar"}
          </button>
          {editId && (
            <button
              type="button"
              className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500"
              onClick={handleCancelEdit}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Lista de artigos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div key={article._id} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-bold text-brown3">{article.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{article.url}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleEdit(article)}
                className="text-blue-500 font-semibold hover:underline"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(article._id)}
                className="text-red-500 font-semibold hover:underline"
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}