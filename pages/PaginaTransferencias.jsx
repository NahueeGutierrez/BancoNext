import Footer from "@/pages/Footer";
import Header from "@/components/Header/NavbarTop";
import NavbarLateral from "@/components/NavbarLateral/NavbarLateral";
import Transferencias from "@/components/Transferencias";

function PaginaTransferencias() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Transferencias/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default PaginaTransferencias;