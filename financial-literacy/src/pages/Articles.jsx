import React from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
const articles = [
    {
      title: "Warren Buffett: Key Investment Principles",
      description:
        "Learn the fundamentals of long-term value investing from the world’s most successful investor.",
      url: "https://www.investopedia.com/articles/markets/102215/10-rules-warren-buffett.asp",
      image: one,
    },
    {
      title: "Top 5 Personal Finance Tips",
      description:
        "Essential tips for managing your money and building wealth responsibly.",
      url: "https://www.moneycontrol.com/pf/",
      image: two,
    },
    {
      title: "Financial Planning for Beginners",
      description:
        "Step-by-step guide to planning your finances and investments.",
      url: "https://www.cnbctv18.com/personal-finance/",
      image: three,
    },
    {
      title: "Top 10 Investing Mistakes to Avoid",
      description:
        "Learn what common pitfalls to avoid when investing in the stock market.",
      url: "https://www.investopedia.com/articles/financial-theory/11/avoid-investing-mistakes.asp",
      image: four,
    },
  ];
  
  

  const Articles = () => {
    return (
      <div style={styles.container}>
        <h1>Financial Articles & Advice</h1>
        <div style={styles.articlesGrid}>
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.cardLink}
            >
              <div style={styles.card}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 8, marginBottom: 10 }}
                />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Inter, sans-serif",
      backgroundColor: "#0b0d17",
      color: "#f1f1f1",
      minHeight: "100vh",
    },
    articlesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: 20,
      marginTop: 20,
    },
    cardLink: {
      textDecoration: "none",
      color: "inherit",
    },
    card: {
      backgroundColor: "#1f2937",
      padding: 20,
      borderRadius: 8,
      boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "transform 0.2s",
      cursor: "pointer",
    },
    image: {
        width: "100%",       // full width of card
        height: 150,         // fixed height
        objectFit: "cover",  // maintain aspect ratio
        borderRadius: 8,
        marginBottom: 10,
      }      
  };
  
  export default Articles;
  