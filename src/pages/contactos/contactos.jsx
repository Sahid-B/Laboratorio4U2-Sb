import styles from "./contactos.module.css";

export const ContactosPage = () => {
    return (
        <div className={styles.contactosContainer}>
            <h1 className={styles.titulo}>Contacto Académico</h1>
            <p className={styles.descripcion}>
                ¿Tienes alguna consulta sobre las materias o el material de estudio? Déjanos tu mensaje.
            </p>

            <form className={styles.formulario}>
                <div className={styles.formGroup}>
                    <label htmlFor="nombre" className={styles.label}>Matrícula / Nombre:</label>
                    <input type="text" id="nombre" className={styles.input} placeholder="Tu número de estudiante o nombre" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="correo" className={styles.label}>Correo institucional:</label>
                    <input type="email" id="correo" className={styles.input} placeholder="estudiante@universidad.edu" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="mensaje" className={styles.label}>Consulta o mensaje:</label>
                    <textarea id="mensaje" className={styles.textarea} rows="5" placeholder="Tengo una duda sobre la materia de..."></textarea>
                </div>
                <button type="button" className={styles.button}>Enviar Consulta</button>
            </form>
        </div>
    );
};
