// enum variables
const statusArray = [
    'finished',
    'running',
    'onHiatus',
    'aborted',
    'announced',
] as const

const typeArray = ['manhwa', 'manhua', 'webtoon'] as const

const languageArray = ['German', 'Korean', 'Chinese', 'English'] as const

// regex variables
const priceValueRegex = /^\d+,\d{2}$/

const currencySymbolArray = ['€', '$', '₩'] as const

const isbnRegex = /^\d{13}$/

export {
    statusArray,
    typeArray,
    priceValueRegex,
    currencySymbolArray,
    languageArray,
    isbnRegex,
}
