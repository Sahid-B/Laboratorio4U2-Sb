import { MateriaItem } from "../../components";
import styles from "./nosotros.module.css";

export const NosotrosPage = () => {
    return (
        <div className={styles.nosotrosContainer}>
            <h1 className={styles.titulo}>Mis Asignaturas</h1>
            <p className={styles.descripcion}>
                Explora las materias del semestre actual, enfocadas en el desarrollo de software y tecnología.
            </p>

            <div className={styles.materiasList}>
                <MateriaItem 
                    foto="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400&h=200" 
                    nombre="29541 - INTELIGENCIA ARTIFICIAL" 
                    descripcion="IA y Analítica de Datos. Fundamentos de inteligencia artificial, machine learning y análisis de grandes volúmenes de datos."
                />
                <MateriaItem 
                    foto="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=400&h=200" 
                    nombre="29542 - MODELADO AVANZADO DE BASE DE DATOS" 
                    descripcion="IA y Analítica de Datos. Diseño y optimización de bases de datos relacionales y no relacionales para alto rendimiento."
                />
                <MateriaItem 
                    foto="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=200" 
                    nombre="29543 - DESARROLLO WEB PARA INTEG DE TECNOLOGÍAS" 
                    descripcion="Desarrollo Software. Creación de aplicaciones web modernas integrando múltiples herramientas y frameworks."
                />
                <MateriaItem 
                    foto="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400&h=200" 
                    nombre="29544 - PROG. INTEGRATIVA DE COMP. WEB" 
                    descripcion="Desarrollo Software. Programación avanzada e integración de componentes web para soluciones empresariales."
                />
                <MateriaItem 
                    foto="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=400&h=200" 
                    nombre="29545 - LECT. ESC. TEXTOS ACADÉMICOS" 
                    descripcion="Tecnología Informática Aplicada. Desarrollo de habilidades de lectura crítica y redacción de documentos técnicos y académicos."
                />
            </div>
        </div>
    );
};