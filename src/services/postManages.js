import { data } from "../fakeData"

export const PostManager = {
    savaData() {
        
    },
    getAll() {
        console.log('obtained from server')
        return data;
    },
    getFreeId() {
        return data.length + 1;
    },
    async addPost(post) {
        data.unshift(post);
        this.savaData();
        console.log('updated on server')
    },
    async removePost(post) {
        const index = data.findIndex((p) => p.id === post.id);
        if (index !== -1) {
          data.splice(index, 1);
          this.saveData();
        }
        console.log('updated on server')
      }
}