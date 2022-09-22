
import './App.css';
import Banner from './Components/Banner/Banner';
import Navabar from './Components/Navbar/Navabar';
import Rowpost from './Components/Rowpost/Rowpost';
import {Action,trend} from './urls'

function App() {
  return (
    <div>
      <Navabar/>
      <Banner/>
      <Rowpost url={trend} title='trend movies'/>
      <Rowpost url={Action} title='Action movies' issmall />
      
   
    </div>
  );
}

export default App;
