import { toast } from "react-toastify";

export const orderlist = async (item) => {
    'use server';

    // console.log(item);

    const response = await fetch("https://wonka-server.onrender.com/orderlist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ item }),
    });

    return await response.json();
};


export const handleDelete = async (id) => {
    'use server'
    const res = await fetch(
        `https://wonka-server.onrender.com/orderlist/${id}`,
        {
            method: "DELETE",

        }

    );

    const data = await res.json();
    console.log(data, 'data DELETE');
    return data

};