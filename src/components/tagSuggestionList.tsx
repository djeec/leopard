import SuggestedTag from "./suggestedTag";

const TagSuggestionList = ({tags}:{tags:string[]}) => {
    return (
        <span>
            {tags?.map((tag : string) => (
                    <SuggestedTag tag={tag} key={tag}></SuggestedTag>
                ))}
            </span>
    )
}

export default TagSuggestionList;