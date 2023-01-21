import PostDto from '../../dtos/PostDto.js';

export default async (request, postRepository) => {
    return await postRepository.create(
        new PostDto(
            request.id,
            request.content,
            request.likeNum,
            request.person_id
        )
    )
};