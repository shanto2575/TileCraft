export const getTiles = async () => {
    const res = await fetch(`https://tilecraft-api.onrender.com/tiles`, {
        cache: "no-store"
    })
    return res.json()
}
