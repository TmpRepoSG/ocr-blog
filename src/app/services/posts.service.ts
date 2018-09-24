import { Injectable } from "@angular/core";
import { Post } from "../models/post.model";
import { Subject } from "rxjs";
import * as firebase from 'firebase';

@Injectable()
export class PostsService {
    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor() { }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    getPosts() {
        firebase.database()
            .ref('/posts')
            .on('value', (data) => {
                this.posts = data.val() ? data.val() : [];
                this.emitPosts();
            });
    }

    getPost(id: number) {
        return new Promise(
            (resolve, reject) => {
                firebase.database()
                    .ref('/posts/' + id)
                    .once('value')
                    .then(
                        (data) => { resolve(data.val()); },
                        (error) => { reject(error); }
                    );
            }
        );
    }

    savePosts() {
        firebase.database()
            .ref('/posts')
            .set(this.posts);
    }

    createNewPost(post: Post) {
        this.posts.push(post);
        this.savePosts();
        this.emitPosts();
    }

    removePost(post: Post) {
        const indexPostToRemove = this.posts.findIndex((postElt) => { return postElt === post });
        this.posts.splice(indexPostToRemove, 1);
        this.savePosts();
        this.emitPosts();
    }

    loveItPost(post: Post) {
        const indexPostToRemove = this.posts.findIndex((postElt) => { return postElt === post });
        var currentPost = this.posts[indexPostToRemove];
        currentPost.loveIts++;
        this.savePosts();
        this.emitPosts();
    }

    dontLoveItPost(post: Post) {
        const indexPostToRemove = this.posts.findIndex((postElt) => { return postElt === post });
        var currentPost = this.posts[indexPostToRemove];
        currentPost.loveIts--;
        this.savePosts();
        this.emitPosts();
    }
}
