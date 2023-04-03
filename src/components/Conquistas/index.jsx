import { useContext } from 'react';
import styles from './Conquistas.module.css';
import medalha from 'assets/medalhas/medalha-ouro.png';
import { ConquistasContext } from '../../commom/context/conquistas';

export default function Conquistas() {

    const { conquistas } = useContext(ConquistasContext);

    return(
        <div className={styles.container}>
            {conquistas.map(conquista => (
                <div key={conquista.id} className={styles.conquistas}>
                    <img src={medalha}/>
                    <h3>{conquista.nome}</h3>
                </div>
                ))}
        </div>
)}