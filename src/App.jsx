import './App.css';
import { PostsList } from './features/Posts/PostsList';
import { NavBar } from './features/Posts/NavBar';
import { SubReddits } from './features/Posts/SubReddits';


function App() {
  return (
    <div className="App">
      <NavBar />
      <PostsList />
      <SubReddits />
    </div>
  );
}

export default App;
