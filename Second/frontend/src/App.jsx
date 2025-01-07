import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1> Hi I am Frontend</h1>
      <p> Number of Jokes: {jokes.length}</p>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h2 style={{ color: "greenyellow" }}>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
