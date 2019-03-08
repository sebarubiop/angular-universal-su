export interface UserResponse {
  success: boolean
  message: string
  token?: string
  value?: User
}

export interface User {
  _id?: string
  provider?: string
  password?: string
  name?: string
  email?: string
  image?: string
  sexo?: string
  dob?: string
  region?: string
  comuna?: string
  telefono?: number
  descripcion?: string
  reviewCounter?: number
  completationRate?: number
  habilidades?: string[]
  idiomas?: string[]
  titulos?: string[]
  transportes?: string[]
  experiencia?: string
}
