import { Outlet } from 'react-router-dom';
import BolhasBackGround from '../BolhasBackground';
import BtnNav from '../BtnNav';
import styles from './PageDefault.module.css';

export default function PageDefault() {
    return(
        <div className={styles.telaToda}>
            <BolhasBackGround />
            <div className={styles.container}>
                <BtnNav />
                <container className={styles.container__perfil}>
                    <Outlet />
                </container>
            </div>
        </div>
    )
}