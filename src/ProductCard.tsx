import { Heart, Plus, Star } from 'lucide-react'
import type { Product } from '../data/products'

type Props = { product: Product; favorite: boolean; quantity: number; onFavorite: () => void; onAdd: () => void }
export default function ProductCard({ product, favorite, quantity, onFavorite, onAdd }: Props) {
  return <article className="product-card">
    <div className="product-image-wrap">
      <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
      {product.badge && <span className="badge">{product.badge}</span>}
      <button className={`favorite ${favorite ? 'is-favorite' : ''}`} onClick={onFavorite} aria-label="Добавить в избранное"><Heart size={19} fill={favorite ? 'currentColor' : 'none'} /></button>
    </div>
    <div className="product-info">
      <div className="product-category">{product.category}</div>
      <h3>{product.name}</h3>
      <div className="rating"><Star size={15} fill="currentColor" /> <b>{product.rating.toFixed(1)}</b><span> · Фермерский продукт</span></div>
      <div className="product-bottom"><div className="price">{product.price.toLocaleString('ru-RU')} ₸<small> / {product.unit}</small></div>
        <button className={`add-button ${quantity ? 'added' : ''}`} onClick={onAdd} aria-label="Добавить в корзину">{quantity ? <>{quantity} <Plus size={16}/></> : <Plus size={19}/>}</button>
      </div>
    </div>
  </article>
}