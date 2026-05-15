

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
    "use server"
    const res = await fetch(
        `https://wonka-server.onrender.com/orderlist/${id}`,
        {
            method: "DELETE",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
        }
    );

    return await res.json();
};