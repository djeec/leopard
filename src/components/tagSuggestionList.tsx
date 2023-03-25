import SuggestedTag from "./suggestedTag";

const TagSuggestionList = ({tags, addTag}:{tags:string[], addTag:(tag:string)=>undefined}) => {
    return (
        <span>
            {tags?.map((tag : string) => (
                    <SuggestedTag tag={tag} key={tag} addTag={addTag} />
                ))}
        </span>
    )
}

export default TagSuggestionList;