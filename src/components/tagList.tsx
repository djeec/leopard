import Tag from "./tag";

const TagList = ({tags}:{tags:string[]}) => {
    return (
        <span>
            {tags?.map((tag : string) => (
                    <Tag tag={tag} key={tag}></Tag>
                ))}
            </span>
    )
}

export default TagList;