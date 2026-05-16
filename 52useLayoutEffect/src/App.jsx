// When we use useLayoutEffect?
// 1. Used for DOM measurement
// 2. Used for layout adjustments
// 3. Prevents flicker/jumping

// When should you not use useLayoutEffect?
// 1. API calls & fetching data
// 2. Event listeners
// 3. Local state updates
// 4. Anything not related to DOM measurement or layout.

// import SimpleUseEffectLayout from "./components/SimpleUseEffectLayout";
// import ExampleTwo from "./components/ExampleTwo";
// import ExampleThree from "./components/ExampleThree";
import ExampleFourth from "./components/ExampleFourth";

function App() {
  return (
    <>
      <ExampleFourth />
    </>
  );
}

export default App;
