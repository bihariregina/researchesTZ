const url = 'http://localhost:8000/api/researchers'

async function getResearchers() {
    const response = await fetch(url)
    const result = await response.json()
    return result.data
}

export default getResearchers