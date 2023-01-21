import LoginRequestDto from '../../dtos/requests/LoginRequestDto.js';

export default async (login, personRepository) => {
    return personRepository.login(
        new LoginRequestDto(
            login.email,
            login.password
        )
    )
}