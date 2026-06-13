import { ConceptoCard } from "../../components";
import styles from "./inicio.module.css";
import { Link } from "react-router-dom";

export const InicioPage = () => {
    return (
        <div className={styles.inicioContainer}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Laboratorio de React</h1>
                    <p className={styles.heroSubtitle}>
                        Aprende y domina el desarrollo basado en componentes, interfaces de usuario dinámicas y herramientas modernas del ecosistema de React.
                    </p>
                    <Link to="/nosotros" className={styles.heroButton}>Ver Asignaturas</Link>
                </div>
            </section>

            <section className={styles.conceptosSection}>
                <h2 className={styles.sectionTitle}>Conceptos de Desarrollo</h2>
                <p className={styles.sectionSubtitle}>
                    Fundamentos esenciales para la construcción de Single Page Applications.
                </p>
                <div className={styles.conceptosGrid}>
                    <ConceptoCard
                        imagen="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80"
                        titulo="Componentes en React"
                        descripcion="Construye interfaces de usuario encapsuladas y reutilizables que gestionan su propio estado."
                    />
                    <ConceptoCard
                        imagen="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
                        titulo="CSS Modules"
                        descripcion="Mantén tus estilos encapsulados a nivel de componente para evitar conflictos globales en tu proyecto."
                    />
                    <ConceptoCard
                        imagen="https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=600&q=80"
                        titulo="React Router"
                        descripcion="Implementa navegación dinámica y fluida sin recargar la página en aplicaciones web."
                    />
                </div>
            </section>
        </div>
    );
};