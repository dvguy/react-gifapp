import React from 'react';
import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () =>{

    const [categories, setCategories] = useState([])

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HxH'] )
    // }

    return(
        <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        <ol>
            { //Map recibe 2 args, uno es el elemento del arreglo y el segundo el indice
                categories.map((category, idx) =>
                <GiftGrid
                 key = {category}
                 category = {category}/>
                )
            }
        </ol>
        </>
    )

}