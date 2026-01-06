import { Link } from "react-router-dom";

function Hero() {
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem" }}>
        Hi, I’m <span style={{ color: "#4f46e5" }}>ALEX</span> 
      </h1>

      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
        Aspiring Web Developer | React Learner | Problem Solver
      </p>

      <Link to="/todo">
        <button style={{ marginTop: "20px", padding: "10px 20px" }}>
          View My Todo App
        </button>
      </Link>
    </section>
  );
}

export default Hero;
