import Pages from "./pages";
import Header from "./components/Header";
import Category from "./components/Category";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <Search />
        <Category />
        <Pages />
      </div>
    </div>
  );
}

export default App;
