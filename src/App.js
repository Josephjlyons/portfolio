import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AboutMe from './Components/AboutMe/AboutMe'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Portfolio from './Components/PortfolioItems/Portfolio';


const App = () => {
return(
    <div>
        <NavBar />
        <Header />
        <AboutMe />
        <Portfolio />
        <Footer />
    </div>
)
}

export default App;