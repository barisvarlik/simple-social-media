import PostDto from '../../dtos/PostDto.js';

export default async (postId, postRepository) => {
    var post = await postRepository.get(postId);
    if(post != null) {
            return new PostDto(
                post.id,
                post.content,
                post.likeNum,
                post.person_id,
            );
    };
    return null;
}