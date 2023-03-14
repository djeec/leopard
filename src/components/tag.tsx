import styles from '@/styles/tag.module.css'
import aTheme from '@/styles/tag.theme.module.css'
import Link from 'next/link';

const Tag = ({tag}:{tag:string}) => {
    return (
        <span className={styles.span}>{tag}<a className={styles.a}>x</a></span>
    )
}

export default Tag;