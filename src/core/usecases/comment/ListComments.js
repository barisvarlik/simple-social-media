import CommentDto from '../../dtos/CommentDto.js';

export default async (postId, commentRespository) => {
    var comments = await commentRespository.list(postId);
    if (comments != null) {
        return comments.map(comment => {
            return new CommentDto(
                comment.id,
                comment.comment_content,
                comment.post_id,
                comment.person_id
            )
        })
    };
    return null;
}