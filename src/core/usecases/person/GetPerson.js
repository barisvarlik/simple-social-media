//usecase that gets one particular record with the given id

import PersonDto from '../../dtos/PersonDto.js';

export default async (personId, personRepository) => {
    var person = await personRepository.get(personId);
    if (person != null)
        return new PersonDto(
            person.id,
            person.firstName,
            person.lastName,
            person.email
        );
    return null;
}