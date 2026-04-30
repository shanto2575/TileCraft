export const getTiles = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tiles`, {
        cache: "no-store"
    })
    return res.json()
}
