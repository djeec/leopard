import styles from '@/styles/tag.module.css'
import aTheme from '@/styles/tag.theme.module.css'
import Link from 'next/link';

const Tag = ({tag}:{tag:string}) => {
    return (
        <span className="px-1"><a className="badge rounded-pill bg-info">{tag} x</a></span>
    )
}

export default Tag;