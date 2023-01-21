import CommentDto from '../../dtos/CommentDto.js';

export default async (commentRespository) => {
    var comments = await commentRespository.get();
    if (comments != null) {
        return comments.map(comment => {
            return new CommentDto(
                comment.id,
                comment.content,
                comment.postId,
                comment.personId
            )
        })
    };
    return null;
}