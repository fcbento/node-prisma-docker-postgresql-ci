import { UsersRepository } from "@/repositories/users/users-repository"
import { User } from "@prisma/client"
import bcrypt from 'bcryptjs'
import { UserAlreadyExistsError } from "./errors/user-already-exists-error"

interface RegisterUserRequest {
  name: string
  email: string
  password: string
}

interface RegisterUserResponse {
  user: User
}

export class RegisterUserService {

  constructor(private usersRepository: UsersRepository) { }

  async execute({ name, email, password }: RegisterUserRequest): Promise<RegisterUserResponse> {
    const password_hash = await bcrypt.hash(password, 6)
    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({ name, email, password_hash })
    return { user }
  }
}
