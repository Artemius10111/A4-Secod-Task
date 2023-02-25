import { Post } from "../types/Post";

export const getPostTitle = (post: Post): string => {
    return `${post.id} ${post.title}`
};