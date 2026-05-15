

export const orderlist = async (item, token) => {
    'use server';

    // console.log(item);

    const response = await fetch("https://wonka-server.onrender.com/orderlist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token?.token}`
        },
        body: JSON.stringify(item),
    });

    return await response.json();
};


export const handleDelete = async (id) => {
    "use server"
    const res = await fetch(
        `https://wonka-server.onrender.com/orderlist/${id}`,
        {
            method: "DELETE",
            cache: "no-store",
        }
    );

    return await res.json();
};