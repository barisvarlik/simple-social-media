import PersonRequestDto from'../../dtos/requests/PersonRequestDto.js';

export default async (request, personRepository) => {
    return await personRepository.create(
        new PersonRequestDto(
            request.id,
            request.firstName,
            request.lastName,
            request.email,
            request.password
        )
    );
};