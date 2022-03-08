import { useEffect, useState } from "react"
import api from "../services/api"
import { IProduct } from "../store/modules/cart/types"

export default function Catalog() {

  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, [])

  return (
    <div>
      <h1>Catalog</h1>
      {catalog.map(data => (
        <article key={data.id}>
          <strong>{data.title}</strong>
          <strong>       : {data.price} $</strong>{"  "}

          <button type="button">Comprar</button>
        </article>
      ))}
    </div>
  )
}
