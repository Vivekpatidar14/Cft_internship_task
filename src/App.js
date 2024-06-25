import Pagination from "./components/Pagination";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="Container mx-auto p-4 h-auto">
      <PostList />
      <Pagination />
    </div>
  );
}

export default App;
