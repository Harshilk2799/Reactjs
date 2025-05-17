import React, { Suspense } from "react";
// import LazyLoading from "./LazyLoading";

const LazyComponent = React.lazy(() => import("./LazyLoading"));
function App() {
  return (
    <>
      <h1>Learning Lazy Loading</h1>
      <Suspense fallback={<h1>Loading....</h1>}>
        <LazyComponent />
      </Suspense>
    </>
  );
}

export default App;
