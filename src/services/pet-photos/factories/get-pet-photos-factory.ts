import { PrismaPetPhotosRepository } from "@/repositories/photos/prisma-pet-photos-repository"
import { GetPetPhotosService } from "../get-pet-photos-service"

export function GetPetPhotosFacotry(){
  const petsRepository = new PrismaPetPhotosRepository()
  const getPetPhotosService = new GetPetPhotosService(petsRepository)

  return getPetPhotosService
}