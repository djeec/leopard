import TagSuggestion from "./tagSuggestion";

const TagSuggestionList = ({tags, addTag}:{tags:string[], addTag:(tag:string)=>undefined}) => {
    return (
        <span>
            {tags?.map((tag : string) => (
                    <TagSuggestion tag={tag} key={tag} addTag={addTag} />
                ))}
        </span>
    )
}

export default TagSuggestionList;