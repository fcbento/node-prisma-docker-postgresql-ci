import { UserAlreadyExistsError } from "@/services/users/errors/user-already-exists-error";
import { RegisterUserFacotry } from "@/services/users/factories/register-user-factory";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    const registerService = RegisterUserFacotry()
   
    await registerService.execute({ name, email, password })
  } catch (err) {
    if(err instanceof UserAlreadyExistsError) {
      return reply.status(409).send(err)
    } 
  }

  return reply.status(201).send()

}