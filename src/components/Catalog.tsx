import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import api from "../services/api"
import { IProduct } from "../store/modules/cart/types"
import { CatalogItem } from "./CatalogItem"

export default function Catalog() {

  const dispatch = useDispatch()
  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, [])
  return (
    <div>
      <h1>Catalog</h1>
      {
        catalog.map(product =>
          <CatalogItem key={product.id} product={product} />
        )
      }
    </div>
  )
}


