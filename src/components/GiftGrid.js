import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({category}) => {

    //  const [image, setimage] = useState([]);

    const {data, loading} = useFetchGifs(category);
    
    return (
        <>
        <h3>{category}</h3>
        {loading ? 'Cargando...' : 'Fin de carga'}

        <div className='card-grid'>
                {
                    data.map(imagenes => (
                        <GifGridItem 
                        key = {imagenes.id}
                        {...imagenes}/>
                    )) 
                }
        </div>
        </>
        
    )
}


