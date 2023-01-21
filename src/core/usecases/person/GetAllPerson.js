//usecase that gets all the records in the database.

import PersonDto from '../../dtos/PersonDto.js';

export default async (personRepository) => {
    var persons = await personRepository.list();
    if(persons != null) 
        return persons.map(person => {
            return new PersonDto(
                person.id,
                person.firstName,
                person.lastName,
                person.email
            );
        });
    return null;
}