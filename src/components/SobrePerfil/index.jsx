import { useContext } from 'react';
import styles from './SobrePerfil.module.css';
import { InformacoesContext } from '../../commom/context/infs';


export default function SobrePerfil() {

    const { nome, descricao, fotoPerfil } = useContext(InformacoesContext);

    return(
        <div className={styles.sobrePerfil}>
            <div className={styles.sobrePerfil__img}>
                <img src={`${fotoPerfil}`}></img>
            </div>
            <h1 className={styles.nome}>{nome}</h1>
            <h3 className={styles.descricao}>{descricao}</h3>
        </div>
    )
}