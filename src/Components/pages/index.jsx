/**
 * Project Structure - Name Exports
 * only makes sense if you have quite a few files
 * create Pages directory
 * setup two components Home.jsx and About.jsx
 * import both in the App.jxs
 * import Home from 'pathToFolder/Pages/Home'; 
 * import About from 'pathToFolder/Pages/About';
 * A lot of work/lines of code
 * then create index.jsx to solve this
 * problem.
 */

import Home from "./Home";
import About from "./About";

export { Home, About}