const heading = React.createElement("h1", { id: "heading", xyz: "test" }, "Welcome to ReactJS world!");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);