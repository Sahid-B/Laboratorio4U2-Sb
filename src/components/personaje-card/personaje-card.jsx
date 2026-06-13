import PropTypes from "prop-types";
import styles from "./personaje-card.module.css";

export const PersonajeCard = ({ nombre, species, image }) => {
    return (
        <div className={styles.personajeCard}>
            <img className={styles.imagen} src={image} alt={nombre} />
            <h3 className={styles.nombre}>{nombre}</h3>
            <p className={styles.especie}>{species}</p>
        </div>
    );
};

PersonajeCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
