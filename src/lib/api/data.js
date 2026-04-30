export const getTiles = async () => {
    const res = await fetch('http://localhost:5000/tiles')
    const data = await res.json()
    return data;
}
