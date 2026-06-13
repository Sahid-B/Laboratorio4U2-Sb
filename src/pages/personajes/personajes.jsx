import { useState, useEffect } from "react";
import { PersonajeCard } from "../../components";
import { obtenerPersonajes } from "../../services/rick-and-morty-service";
import styles from "./personajes.module.css";

export const PersonajesPage = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const cargarPersonajes = async () => {
            const data = await obtenerPersonajes();
            setPersonajes(data);
        };
        cargarPersonajes();
    }, []);

    return (
        <div className={styles.personajesContainer}>
            <h1 className={styles.titulo}>Personajes</h1>
            <p className={styles.descripcion}>
                Información obtenida desde la API de Rick and Morty:
            </p>

            <div className={styles.grid}>
                {personajes.map(personaje => (
                    <PersonajeCard 
                        key={personaje.id}
                        nombre={personaje.name}
                        species={personaje.species}
                        image={personaje.image}
                    />
                ))}
            </div>
        </div>
    );
};
