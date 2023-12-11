/**
 * FOR BIG PROJECT
 * Project structure - default export
 * To avoid use of same name for the folder and component
 * i.e navbar/Navbar
 * import Navbar from "./Components/navbar/Navbar";
 * we can solve by creating an entry point file 
 * index.js then populate with the content in the
 * Navbar.jsx then change the import statement in App.jsx to
 * import Navbar from "./Components/navbar"; which still works
 * as expected because entry point file (index.jsx) present.
 * But if there are bunch of files in the sample folder, then 
 * the logic content in our entry file changes i.e 
 * export { default } from "./Navbar";
 * The import statement remains the same in App.jsx
 */

const Navbar = () => {
  return (
    <h2>Hello Navbar</h2>
  )
}
export default Navbar