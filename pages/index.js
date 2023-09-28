import Header from "../components/Header/NavbarTop";
import Footer from "./Footer";
import Bienvenida from "../components/Main/Bienvenida";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";

function Inicio() {
    return ( 
        <>
        <header >
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Bienvenida/>
        </main>
        <footer>
            <Footer/> 
        </footer>
       
        </>
     );
}

export default Inicio;