import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
    const anioActual = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p className={styles.texto}>© {anioActual} Portal de Asignaturas. Todos los derechos reservados.</p>
        </footer>
    );
}
