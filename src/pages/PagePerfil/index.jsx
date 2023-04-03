import React from 'react';
import Conquistas from '../../components/Conquistas';
import DiasProgrammer from '../../components/DiasProgrammer';
import SobrePerfil from '../../components/SobrePerfil';
import styles from './PagePerfil.module.css'

export default function PagePerfil(){
    
    return (
            <>
                <section className={styles.container__nome}>
                    <SobrePerfil />
                </section>
                <DiasProgrammer />
                <Conquistas />
            </>

    )
}

