export default async (commentId, commentRespository) => {
    return await commentRespository.delete(commentId);
}