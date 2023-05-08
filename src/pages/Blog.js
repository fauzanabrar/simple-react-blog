import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(function () {
    async function getArticles() {
      document.title = "Blog"
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
      const response = await request.json();

      console.log(response)

      setArticles(response)
      setLoading(false);
    }

    getArticles();
  }, [])
  
  return (
    <section className="section">
      <h1 className="section-title">Blog</h1>
      {loading ? <p>loading.....</p> : (
        <div className="articles">
          {articles.map((article) => {
            return <article key={article.id} className="article">
              <h2 className="article-title">
                <Link to={`/blog/${article.id}`}>{article.title}</Link>
              </h2>
              <time className="article-time">
                {new Date(article.publishedAt).toLocaleDateString()}
              </time>
            </article>
          })}
        </div>
      )}
    </section>
  )
}