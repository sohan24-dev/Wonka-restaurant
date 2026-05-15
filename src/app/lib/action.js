import { revalidatePath } from "next/cache";


export const orderlist = async (item, token) => {
    'use server';

    try {
        const response = await fetch("https://wonka-server.onrender.com/orderlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(item),
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            return { error: true, message: errData.message || "Failed request validation" };
        }

        revalidatePath('/orderlist');
        return await response.json();
    } catch (error) {
        return { error: true, message: "Server connection failed" };
    }
};


export const handleDelete = async (id, token) => {
    "use server";

    try {
        const res = await fetch(
            `https://wonka-server.onrender.com/orderlist/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`
                },
            }
        );

        if (!res.ok) {
            console.error("Failed to delete from backend:", res.statusText);
            return { error: true, message: "Could not delete the item." };
        }

        const data = await res.json();

        revalidatePath('/orderlist');
        revalidatePath('/', 'layout');

        return data;

    } catch (error) {
        console.error("Server Action Delete Error:", error);
        return { error: true, message: "Network connection failed." };
    }
};