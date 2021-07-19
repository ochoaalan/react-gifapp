import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = ( category ) => {

  const [state, setstate] = useState({
    data: [],
    loading: true
  });

  useEffect( () => { // para que solo se dispare cuando cambie la categoria

    getGifs( category ) // aqui hace la peticion http
    .then( imgs => { // obtenemos las imagenes en el result como imgs o cualquier nombre que quieras
        // setState dispara una re-renderizacion del componente GifGrid porque es el que nos llamo y es lo damos de rreturn
        setstate({ // Cambiamos la data con la recibida
          data: imgs,
          loading: false
        });
    })

  }, [category])

  return state; //{data:[], loading: true}

}