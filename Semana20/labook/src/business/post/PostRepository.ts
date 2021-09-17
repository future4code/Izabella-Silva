import { Post } from "../../model/Post";
import { PostDTO } from "./PostBusiness";

export interface PostRepository {
    createPost(post: Post): Promise<any>;
    findPostById(id: string): Promise<object>
}