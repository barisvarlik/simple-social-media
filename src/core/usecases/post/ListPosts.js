import PostDto from '../../dtos/PostDto.js';

export default async (postRepository) => {
    var posts = await postRepository.list();
    if(posts != null) {
        return posts.map(post => {
            return new PostDto(
                post.id,
                post.content,
                post.likeNum,
                post.person_id
            )
        });
    }
    return null;
}