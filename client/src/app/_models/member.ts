import { Photo } from "./photo"


export interface Member {
    id: number
    userName: string
    photoUrl: string
    age: number
    knownAs: string
    created: string
    lastActive: string
    gendereù: any
    introduction: string
    lookingFor: string
    interests: string
    city: string
    country: string
    photos: Photo[]
  }
  
