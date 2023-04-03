import styles from './ConquistasConfig.module.css';
import TamplateConfigConquista from './TamplateConfigConquista';
import medalha from 'assets/medalhas/medalha-ouro.png';
import { useContext } from 'react';
import { ConquistasContext } from '../../../commom/context/conquistas';

export default function ConquistasConfig() {
    const { conquistas, atualizatConquistas } = useContext(ConquistasContext);
    return(
        <div className={styles.container}>
            {conquistas.map(conquista => (
                <div key={conquista.id} className={styles.conquistas}>
                    <TamplateConfigConquista conquista={conquista}/>
                    <button className={styles.button} 
                        onClick={() => atualizatConquistas(conquista)}><img src={medalha}/>
                    </button>
                    <h3>{conquista.nome}</h3>
                </div>
                ))}
        </div>
)}