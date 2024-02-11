export async function post(URL, info) {
    const response = await fetch (URL, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(info)
    })

    const data = await response.json();
    return data
};


export async function get(URL) {
    const response = await fetch(URL)
    const data = await response.json();

    return data

}

export async function deleteHttp(URL) {
    const response = await fetch(URL, {
        method: "DELETE"
    });

    const data = response.json();

    return data;

}


export async function update(URl, info){
    const response = await fetch(URl, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(info)
    });

    const data = await response.json();

    return data;
}