import React from 'react'
import './good.scss'

const Goods = (props) => {
  return (

    <div className={"catalog__column"}>
              <div className={"catalog__item item_catalog"} >
                <a href="/#" target="_blank" className={"item_catalog__image _img"}>
                  <img className={"product_img"} src={props.imgSrc} alt="plastic constructor" />
                </a>
                <div className={"item_catalog_content"}>
                  <div className={"content"}>
                    <a href="/#" target="_blank" className={"item_catalog__link"}>
                      <h4 className={"item_catalog__title"}>{props.nameGood}</h4></a>
                  </div>
                </div>
                <div className={"item_action"}>
                  <div className={"item_price"}>
                    <span className={"item_price item_action_text"}>{props.price}</span>
                  </div>
                  <div className={"item_info"}>
                   <p className={"item_catalog__title"}> Количество шт: <span>{props.count}</span></p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Goods
