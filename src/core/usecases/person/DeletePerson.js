export default async (personId, personRepository) => {
    return await personRepository.delete(personId);
}