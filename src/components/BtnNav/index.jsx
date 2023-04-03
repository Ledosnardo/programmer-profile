import { Link, useParams } from 'react-router-dom';
import styles from './BtnNav.module.css';
import { BsEmojiDizzy } from 'react-icons/bs';
import { BsGear } from 'react-icons/bs';


export default function BtnNav(){
    const paramns = useParams().id;
    
    function perfilEmoji(){
        if(paramns === 'config'){
            return styles.button
        } else{
            return styles.button__on
        }
    }

    function configEmoji(){
        if(paramns === 'config'){
            return styles.button__on
        } else{
            return styles.button
        }
    }

    return(
        <nav className={styles.nav}>
            <Link to='/' className={`${perfilEmoji()}`}> <BsEmojiDizzy/> </Link>
            <Link to='/config' className={`${configEmoji()}`}> <BsGear/> </Link>
        </nav>
    )
}