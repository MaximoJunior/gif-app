import { useEffect, useState } from 'react'
import { API_KEY } from '../api/config';
import { fetchData } from '../helpers/fetchData';

export const useFetchGifs = ( name, limit = 12 ) => {

    const [data, setData] = useState( { loading:true, data:[] } );
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(name) }&api_key=${ API_KEY }&limit=${ limit }`;

    useEffect(() => {

        fetchData(url)
        .then( data => {

            const arr = data.data.map( item => {
                let obj = { id: item.id, title: item.title };
                obj.url = item.images.downsized_medium.url;
                return obj;
            })

            setData({
                loading: false,
                data: arr
            });
        })
    }, [url])


     return data;
}
