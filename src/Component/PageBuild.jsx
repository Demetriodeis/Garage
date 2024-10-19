import { Barricade } from 'phosphor-react';
import styles from './PageBuild.module.css'
export function PageBuild() {
    return (
        <div className={styles.pageBuild}>
            <h1><Barricade size={32} color="#f4d50b" weight="fill" />Página em Construção<Barricade size={32} color="#f4d50b" weight="fill"/></h1>
            <p>Estamos trabalhando duro para trazer novidades. Volte em breve!</p>
            <div className={styles.loader}></div>
        </div>
    )
}