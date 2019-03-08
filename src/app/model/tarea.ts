import { User } from './user'
import { Oferta } from '@app/model/oferta'

export interface TareasResponse {
    value: Tarea[]
    success: boolean
    message: string
}

export interface TareaResponse {
    value: Tarea
    success: boolean
    message: string
}

export interface Tarea {
    _id?: string
    // categoria?: string
    titulo?: string
    descripcion?: string
    medio?: number
    comuna?: string
    region?: string
    region_numero?: string
    fecha?: string
    hora?: string
    minuto?: string
    meridian?: string
    cantidad?: number
    presupuesto?: number
    createdBy?: User
    createdAt?: string
    status?: number
    profesional?: number
    ofertas?: Oferta[]
}

export interface TareaFilter { 
    keyword?: string
    region?: string
    comuna?: string
    medio?: number
    estado?: string
    orden?: number
}