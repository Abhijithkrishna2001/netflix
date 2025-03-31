import './App.css';
import AdBanner from './Components/AdBanner/AdBanner';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar'
import RowPosters from './Components/RowPosters/RowPosters';
import {action,originals,comedy,horror,romance} from './Components/Urls/Urls'

function App() {
  return (
    <div className="App">

      <AdBanner/>
     <NavBar/>
     <Banner/>
     <RowPosters title="Netflix Original" url={originals} />
     <RowPosters title="Action" ismall url={action}/>
     <RowPosters title="Comdey" ismall url={comedy}/>
     <RowPosters title="Horror" ismall url={horror}/>
     <RowPosters title="Romance" ismall url={romance}/>
    </div>
  ); 
}

export default App;
