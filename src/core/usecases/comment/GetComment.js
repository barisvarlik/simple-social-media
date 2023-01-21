import CommentDto from '../../dtos/CommentDto.js';

export default async (commentId, commentRespository) => {
    var comment = await commentRespository.get(commentId);
    if(comment != null) {
        return new CommentDto(
            comment.id,
            comment.content,
            comment.postId,
            comment.personId
        )
    };
    return null;
}