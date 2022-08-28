import React from 'react'
import './products.scss'
import Goods from '../Goods/Goods'

const Product = () => {
  const goods = [
    {
      id: 1,
      nameGood: 'Футбольный мяч',
      imgSrc:
        'https://lenta.servicecdn.ru/globalassets/1/-/57/39/93/336686_9.png?preset=fulllossywhite',
      price: '12 $',
      count: 45,
    },
    {
      id: 2,
      nameGood: 'Волейбольный мяч',
      imgSrc:
        'https://myachiki.by/upload/iblock/2bb/2bbe43065cbb0ac112b75e83a882f339.jpg',
      price: '22 $',
      count: 35,
    },
    {
      id: 3,
      nameGood: 'Баскетбольный мяч',
      imgSrc:
        'https://cdn2.static1-sima-land.com/items/329280/3/700-nw.jpg',
      price: '32 $',
      count: 18,
    },
    {
      id: 4,
      nameGood: 'Теннисный мяч',
      imgSrc:
        'https://m.media-amazon.com/images/I/71krt-XiqcL.jpg',
      price: '42 $',
      count: 5,
    },
    {
        id: 5,
        nameGood: 'Гимнастический мяч',
        imgSrc:
          'https://7960777a-2fd1-4b07-8bbb-896e98c4659c.selcdn.net/upload/prod_add6/093/product-496093-1.jpg',
        price: '15 $',
        count: 5,
      },
  ]

  return (
    <div className={'products'} >
      {goods.map((item) => {
        return (
          <Goods
            nameGood={item.nameGood}
            price={item.price}
            count={item.count}
            imgSrc={item.imgSrc}
            key={item.id}
          />
        )
      })}
    </div>
  )
}

export default Product
