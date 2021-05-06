import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/PortfolioItems/Portfolio';

const App = () => {
return(
    <div>
        <NavBar />
        <AboutMe />
        <Portfolio />
        <Footer />
    </div>
)
}

export default App;