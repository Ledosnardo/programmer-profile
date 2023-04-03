import { useContext } from 'react';
import { DiasProgrammerContext } from '../../../commom/context/diasDeProgramador';
import styles from './DiasProgrammerConfig.module.css';

export default function DiasProgrammerConfig() {
    const { diaComeco, setDiaComeco, CalculoDias, setDiasProgrammer } = useContext(DiasProgrammerContext)

    function mudancaData() {
        const novoDiaComeco = CalculoDias();
        setDiasProgrammer(novoDiaComeco)
    }

    return(
        <div className={styles.container} onClick={mudancaData}>
            <h1>Coloque a data que começou a programar:</h1>
            <div>
                <input type='date' className={styles.data}
                    value={diaComeco} onChange={(res) => setDiaComeco(res.target.value)}
                    
                />
                <button className={styles.button}>Enviar</button>
            </div>
        </div>
    )
}