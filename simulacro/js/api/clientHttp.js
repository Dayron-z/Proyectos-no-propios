export async function post(url, info) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(info)
        });
    
        const data =  await response.json();
        return data;   
    } catch (error) {
        console.error(error);
    }
}


export async function get(url) {
    try {
        const response = await fetch(url)
        const data = await response.json();
    
        return data
    } catch (error) {
        console.error(error);
    }
}

export async function categoryDelete(url) {
    const response = await fetch(url, {
            method: "DELETE"
        });
    
        const data = await response.json()
    
        return data


}


export async function update(url, info) {
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(info)
        });
    
        const data =  await response.json();
        return data;   
    } catch (error) {
        console.error(error);
    }
}
