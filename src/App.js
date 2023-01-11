import './App.css';
import About from './Components/About/About';
import Calender from './Components/git-states/Calender';
import States from './Components/git-states/States';
import Nav from './Components/Navbar/Nav';
import Card from './Components/Repos/Card';
import Skills from './Components/skills/Skills';


function App() {
  return (
    <div className="App">
     <Nav/>
     <About/>
     <Skills/>
     <Card/>
     <Calender/>
     <States/>
    </div>
  );
}

export default App;
