export const getTest = async () => {
    try{
        const res = await fetch("htpp://localhost:8080/test",{
            method: 'GET',
            header: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return await res.json();
    } catch (err){}
};