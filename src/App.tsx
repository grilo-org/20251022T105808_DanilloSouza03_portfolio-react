import Header from './components/Header';
import Banner from './components/Banner';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Cursos from './components/Cursos';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faTimes, faBars);

function App() {

    return (
        <div>
            <Header />
            <Banner />
            <Sobre />
            <Projetos />
            <Cursos />
            <Footer />
        </div>
    );
}

export default App;