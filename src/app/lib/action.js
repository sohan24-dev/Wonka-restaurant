export const orderlist = async (item) => {
    'use server';

    console.log(item);

    const response = await fetch("https://wonka-server.onrender.com/orderlist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ item }),
    });

    return await response.json();
};