import { data } from "../fakeData"

export const PostManager = {
    savaData() {
        
    },
    getAll() {
        return data;
    },
    getFreeId() {
        return data.length + 1;
    },
    addPost(post) {
        data.unshift(post);
        this.savaData();
    },
    removePost(post) {
        data.pop(post);
        this.savaData();
    }

}