export type Product = {
  id: number
  name: string
  category: string
  price: number
  unit: string
  rating: number
  badge?: string
  image: string
  description: string
}

export const categories = ['Все товары', 'Овощи', 'Фрукты', 'Молочные продукты', 'Мясо и рыба', 'Зелень']

export const products: Product[] = [
  { id: 1, name: 'Помидоры фермерские', category: 'Овощи', price: 690, unit: 'кг', rating: 4.9, badge: 'Хит продаж', image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=700&q=85', description: 'Сочные спелые томаты, выращенные на ферме.' },
  { id: 2, name: 'Яблоки красные', category: 'Фрукты', price: 520, unit: 'кг', rating: 4.8, badge: 'Свежий урожай', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=85', description: 'Хрустящие сладкие яблоки с натуральным вкусом.' },
  { id: 3, name: 'Молоко цельное', category: 'Молочные продукты', price: 480, unit: 'л', rating: 4.9, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=85', description: 'Натуральное молоко от местных фермеров.' },
  { id: 4, name: 'Морковь молодая', category: 'Овощи', price: 350, unit: 'кг', rating: 4.7, image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=700&q=85', description: 'Сладкая сочная морковь для любимых блюд.' },
  { id: 5, name: 'Клубника сезонная', category: 'Фрукты', price: 1450, unit: 'кг', rating: 5.0, badge: 'Сезонное', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=700&q=85', description: 'Ароматная ягода, собранная вручную.' },
  { id: 6, name: 'Сыр домашний', category: 'Молочные продукты', price: 1850, unit: 'шт', rating: 4.8, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=700&q=85', description: 'Нежный сыр небольшого фермерского производства.' },
  { id: 7, name: 'Свежая зелень', category: 'Зелень', price: 280, unit: 'пучок', rating: 4.6, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85', description: 'Ароматная зелень для салатов и домашних блюд.' },
  { id: 8, name: 'Фермерская говядина', category: 'Мясо и рыба', price: 3250, unit: 'кг', rating: 4.9, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=700&q=85', description: 'Охлаждённое мясо от проверенного поставщика.' },
]
