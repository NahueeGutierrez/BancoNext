import Link from 'next/link'

function NavbarLateral() {
    return (
        <> 
            <div className="cont-menu active" id="menu">
                <ul>       
                    <li> <Link href='/PaginaTransferencias'>Transferencias</Link> </li>
                    <li> <Link href='/PaginaPagos'> Pagos</Link> </li>
                    <li> <Link href='/PaginaConversorDolar'>Conversor</Link> </li>
                    <li> <Link href='/PaginaInversiones'>Inversiones</Link> </li>
                    <li> <Link href='/Ayuda'>Ayuda</Link> </li>
                </ul>
            </div>
        </>
    );
}

export default NavbarLateral;