import { useContext } from 'react';
import { DiasProgrammerContext } from '../../commom/context/diasDeProgramador';
import styles from './DiasProgrammer.module.css';

export default function DiasProgrammer() {
    const { diasProgrammer } = useContext(DiasProgrammerContext)

    return(
        <div className={styles.container}>
            <h1>Sou programador a</h1>
            <h2> {diasProgrammer} dias.</h2>
        </div>
    )
}