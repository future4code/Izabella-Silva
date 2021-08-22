import { usePalette } from 'react-palette'

const GetPredominatColor = (url) => {
    const { data, loading, error } = usePalette(url)
    return data.vibrant
}

export default GetPredominatColor