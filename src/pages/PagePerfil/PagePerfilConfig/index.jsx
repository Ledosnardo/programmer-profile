import React from 'react';
import styles from '../PagePerfil.module.css'
import PerfilConfig from '../../../components/SobrePerfil/PerfilConfig';
import DiasProgrammerConfig from '../../../components/DiasProgrammer/DiasProgrammerConfig';
import ConquistasConfig from '../../../components/Conquistas/ConquistasConfig';

export default function PagePerfilConfig(){
    
    return (
            <>
                <section className={styles.container__nome}>
                    <PerfilConfig/>
                </section>
                <DiasProgrammerConfig />
                <ConquistasConfig />
            </>

    )
}

