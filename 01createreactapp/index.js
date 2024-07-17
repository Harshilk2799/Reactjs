const rootElement = document.getElementById("root");
console.log(rootElement);

// Syntax: React.createElement(type, props/attributes, children)
// const result = React.createElement("h1", null, "Hello World");
// const result = React.createElement(
//   "h1",
//   { className: "heading" },
//   "Hello World"
// );

// console.log(result);
// ReactDOM.createRoot(rootElement).render(result);

// function HelloWorld() {
//   return React.createElement("h1", null, "Hello World");
// }
// ReactDOM.createRoot(rootElement).render(HelloWorld());

// Babel CDN use to convert JSX to create react element
function HelloWorld() {
  return <h1>Hello World</h1>;
}

ReactDOM.createRoot(rootElement).render(<HelloWorld />);
