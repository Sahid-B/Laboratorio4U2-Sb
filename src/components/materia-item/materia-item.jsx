import PropTypes from 'prop-types';
import styles from './materia-item.module.css';

export const MateriaItem = ({ foto, nombre, descripcion }) => {
    return (
        <div className={styles.materiaItem}>
            <img src={foto} alt={nombre} className={styles.foto} />
            <div className={styles.contenido}>
                <h4 className={styles.nombre}>{nombre}</h4>
                <p className={styles.descripcion}>{descripcion}</p>
            </div>
        </div>
    );
};

MateriaItem.propTypes = {
    foto: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
};
