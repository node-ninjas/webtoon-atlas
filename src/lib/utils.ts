import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ZodSchema } from 'zod'
import axios from 'axios'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const URL = 'localhost:3550'

export const fetchSingleEndpoint = async <T>(
    endpoint: string,
    schema: ZodSchema<T>
): Promise<T> => {
    if (!endpoint) {
        throw new Error('Please enter a correct URL with a endpoint')
    }
    try {
        const response = await axios.get(`http://${URL}/${endpoint}`)
        const data = response.data
        console.log(data)

        const validatedData = schema.safeParse(data)

        if (!validatedData.success) {
            throw new Error(JSON.stringify(validatedData.error))
        }

        return validatedData.data
    } catch (e: any) {
        if (e.response && e.response.status === 404) {
            throw new Error('404: The requested resource was not found')
        }
        throw new Error(e)
    }
}
