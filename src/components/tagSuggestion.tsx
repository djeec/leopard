import styles from '@/styles/suggested-tag.module.css'

const TagSuggestion = ({tag, addTag}:{tag:string, addTag:(tag:string)=>undefined}) => {
    // need a helper function because onClick has to take a function, and we need to specify a value
    // we can't use addTag in the onClick, or we couldn't specify the argument
    // if we did, it would infinitely loop
    const addTheTag = () => {
        addTag(tag);
    }

    return (
        <span className="px-1"><a onClick={addTheTag} className="badge rounded-pill bg-info">{tag}</a></span>
    )
}

export default TagSuggestion;