/*import React from 'react';
import { useHistory } from "react-router";
import { Button } from '../../components/Button/index.js';
import { Link } from 'react-router-dom';


export function Header({
    headerClass,
    attendant,
    headerLink,
    linkBtn,
    logOut
}) {

    const history = useHistory();

    return (
        <header className={headerClass}>
            <h1 className={attendant}> Atendente |  </h1>
            <Button className={linkBtn}>
                <Link className={headerLink} to="/kitchen"> Pedidos </Link>
            </Button>
            <Button className={linkBtn}>
                <Link className={headerLink} to="/kitchen"> Acompanhar Pedidos </Link>
            </Button>
            <Button className={logOut} onClick={() => {
                localStorage.clear()
                history.push('/')
            }}>Sair</Button>
        </header>
    );
}*/