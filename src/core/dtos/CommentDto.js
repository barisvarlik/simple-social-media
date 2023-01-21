export default class {
    constructor(id=null, commentContent, postId, personId) {
        this.id = id;
        this.comment_content = commentContent;
        this.post_id = postId;
        this.person_id = personId;
    }
}