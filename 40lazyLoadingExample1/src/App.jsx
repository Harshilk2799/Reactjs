import { useState, lazy, Suspense } from "react";
// import Post from "./Post";

const Post = lazy(() => import("./Post"));
function App() {
  const [showPost, setShowPost] = useState(false);
  return (
    <>
      <button onClick={() => setShowPost(!showPost)}>Show Posts</button>
      {showPost && (
        <Suspense fallback={<h1>Posts Loading...</h1>}>
          <Post />
        </Suspense>
      )}
    </>
  );
}

export default App;
