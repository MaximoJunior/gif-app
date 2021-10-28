

export const fetchData = async ( url ) => {
    let data = await fetch(url);
    data = await data.json();
    return data;
}
