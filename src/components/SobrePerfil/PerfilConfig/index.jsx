import { useContext } from 'react';
import styles from './PerfilConfig.module.css';
import { InformacoesContext } from '../../../commom/context/infs';


export default function PerfilConfig() {

    const { nome, setNome, descricao, setDescricao, fotoPerfil, setFotoPerfil } = useContext(InformacoesContext);

    return(
        <div className={styles.sobrePerfil}>
            <div className={styles.sobrePerfil__img}>
                <img src={`${fotoPerfil}`}></img>
                <div  className={styles.url}>
                    <input type='url' className={styles.urlImage}
                        value={fotoPerfil} onChange={(res) => setFotoPerfil(res.target.value)}
                    />
                    <button className={styles.btn__delete} onClick={() => setFotoPerfil('')}>X</button>
                </div>
            </div>
            <input type='text' className={styles.nome} placeholder='Nome Completo'
                 value={nome} onChange={(res) => setNome(res.target.value)} 
            />
            <textarea className={styles.descricao} placeholder='Sobre você'
                value={descricao} onChange={(res) => setDescricao(res.target.value)}
            />
        </div>
    )
}