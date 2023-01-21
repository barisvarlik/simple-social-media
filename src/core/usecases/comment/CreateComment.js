import CommentDto from '../../dtos/CommentDto.js';

export default async (request, commentRespository) => {
    return await commentRespository.create(
        new CommentDto(
            request.id,
            request.commentContent,
            request.postId,
            request.personId
        )
    )
}