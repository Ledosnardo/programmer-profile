import styles from './TamplateConfigConquista.module.css';
import medalha from 'assets/medalhas/medalha-ouro.png';
import { useContext, useState } from 'react';
import { ConquistasContext } from 'commom/context/conquistas';

export default function TamplateConfigConquista({ conquista }){

    const { atualizatConquistas } = useContext(ConquistasContext);
    const [ valorInput, setValorInput ] = useState('');

    function enviaForm(e){
        e.preventDefault();
        conquista.nome = valorInput;
        atualizatConquistas(conquista);

        const lista = [e.target[0], e.target[1], e.target[2]]
        const listaFiltrada = lista.filter(res => res.checked === true)

        console.log(listaFiltrada[0].name)
    }

    return(
        <form style={{display: `${conquista.On ? 'block' : 'none'}`}}  className={styles.container} onSubmit={(e) => enviaForm(e)}>
            <div className={styles.text}>
                <input type='text' placeholder={conquista.nome} className={styles.input}
                    value={valorInput} onChange={(res) => setValorInput(res.target.value)}
                />
                <button className={styles.button}>Atualizar</button>
            </div>
        </form>
    )
}