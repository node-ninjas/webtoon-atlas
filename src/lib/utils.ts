import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import axios from 'axios'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const URL = 'localhost:3550'

export const fetchSingleEndpoint = async (endpoint: string) => {
    if (!endpoint) {
        throw new Error('Please enter a correct URL with a endpoint')
    }
    try {
        const response = await axios.get(`http://${URL}/${endpoint}`)
        const data = response.data
        console.log(data)
        return data
    } catch (e: any) {
        throw new Error(e)
    }
}
