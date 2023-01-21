export default async (postId, postRepository) => {
    return await postRepository.delete(postId);
}