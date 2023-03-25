import styles from '@/styles/suggested-tag.module.css'

const SuggestedTag = ({tag}:{tag:string}) => {
    return (
        <span className="px-1"><a href="#" className="badge rounded-pill bg-info">{tag}</a></span>
    )
}

export default SuggestedTag;