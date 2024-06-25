import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import { ToastContainer, toast } from 'react-toastify';
  


function App() {
  return (
    <div className="Container mx-auto p-4">
       <PostList/> 
       
       <Pagination/>
    </div>
  );
}

export default App;
