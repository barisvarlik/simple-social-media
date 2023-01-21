import PersonDto from'../../dtos/PersonDto.js';

export default async (personId, request, personRepository) => {
    return await personRepository.update(personId, 
        new PersonDto(
            request.id,
            request.firstName,
            request.lastName,
            request.email,
        ));
};