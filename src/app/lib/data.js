export const getitems = async () => {
    const res = await fetch('https://wonka-server.onrender.com/data')
    const data = await res.json()
    return data
}
export const orderallitems = async () => {
    const res = await fetch('https://wonka-server.onrender.com/orderlist')
    const data = await res.json()
    return data
}
export const detailsItems = async (id) => {
    const res = await fetch(`https://wonka-server.onrender.com/data/${id}`)
    const data = await res.json()
    // console.log(data);
    return data
}