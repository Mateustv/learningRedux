import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import api from "../services/api"
import { addProductToCart } from "../store/modules/cart/actions"
import { IProduct } from "../store/modules/cart/types"

export default function Catalog() {

  const dispatch = useDispatch()
  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, [])

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [])
  return (
    <div>
      <h1>Catalog</h1>
      {catalog.map(data => (
        <article key={data.id}>
          <strong>{data.title}</strong>
          <strong>       : {data.price} $</strong>{"   "}

          <button
            type="button"
            onClick={() => handleAddProductToCart(data)}
          >
            Comprar
          </button>
        </article>
      ))}
    </div>
  )
}


