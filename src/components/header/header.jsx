import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className={styles.header}>
            <h2>Portal de Asignaturas</h2>
            <nav>
                <Link className={styles.itemsMenu} to="/">Inicio</Link>
                <Link className={styles.itemsMenu} to="/nosotros">Asignaturas</Link>
                <Link className={styles.itemsMenu} to="/contactos">Contactos</Link>
                <Link className={styles.itemsMenu} to="/personajes">Personajes</Link>
            </nav>
        </header>
    );
}
