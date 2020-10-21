import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() =>{
        getGifs(category)
        .then( imgs =>{
            setState({
                data: imgs,
                loading: false
            });
        })
    }, [category]);
    return state; //state regresa como en todo hook useState, el estado inicial en este caso
    // regresa data [] y loading true.
}
