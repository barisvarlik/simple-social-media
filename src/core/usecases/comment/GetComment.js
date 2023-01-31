import CommentDto from '../../dtos/CommentDto.js';

export default async (commentId, commentRespository) => {
    var comment = await commentRespository.get(commentId);
    if(comment != null) {
        return new CommentDto(
            comment.id,
            comment.comment_content,
            comment.post_id,
            comment.person_id
        )
    };
    return null;
}