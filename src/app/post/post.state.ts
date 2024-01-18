export interface PostState {
    post: any;
    loading: boolean;
    error: any;
}

export const initialPostState: PostState = {
    post: null,
    loading: false,
    error: null,
};