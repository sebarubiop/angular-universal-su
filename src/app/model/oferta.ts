import { User } from './user'
import { Tarea } from './tarea'

export interface OfertaResponse {
    value: Oferta
    success: boolean
    message: string
}

export interface OfertasResponse {
    value: Oferta[]
    success: boolean
    message: string
}

export interface OfertaRequest {
    oferta: number
    createdById: string
    tareaId: string
}

export interface Oferta {
    _id?: string
    oferta?: number
    createdAt?: string
    createdBy?: User
    status?: number
    tarea?: Tarea
}