import "./App.css";
import Countries from "./components/CountryDetails/countries/Countries";
import Counter from "./components/Tashbih-Counter/Counter";
import Posts from "./components/PostsDetails/Posts/Posts";

function App() {
  return (
    <>
      <div>
        <Countries />
        <Counter />
        <Posts />
      </div>
    </>
  );
}

export default App;
