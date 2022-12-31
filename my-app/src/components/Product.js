  import React from 'react'

  function Product({product , basket , setBasket , total , money}) {
    
    const basketItem = basket.find((item) => item.id === product.id)

    const addBasket = () => {
      //tıkladığımız daha önce var mı? yoksa amount : 1 yap , varsa 1 arttır ve basket'e gerekli şekilde ekle
      const checkBasket = basket.find(item => item.id === product.id)

      // tıklanmayanları eski haliyle, tıklananı yeni (checkBasket) haliyle ekle
      if(checkBasket){
          checkBasket.amount += 1
          setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
      }
      else{
          setBasket([...basket, {
              id : product.id,
              amount : 1,
              model : product.model,
              price : product.price
          }])
      }
    }

    const subtractBasket = () =>{
      const currentBasket = basket.find(item => item.id === product.id)
      const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
      currentBasket.amount -= 1

      if(currentBasket.amount === 0){
        setBasket([...basketWithoutCurrent])
      }
      else{
        setBasket([...basketWithoutCurrent , currentBasket])
      }
    }

    return (
      <div className='ortala'>
        <div className='product'>
          <div className='title'>
            <h4>{product.model} ({product.title}-{product.gender})</h4>
          </div>
          <div>
            <img className='resim' src={product.address}></img>
          </div>
          <div className='priceSellBuy'>
          <div className='price'>{product.price} TL</div>
          <hr />
          <div>
            <button className={`${(basketItem) ? "sat1" : "sat2"}`} disabled={!basketItem} onClick={subtractBasket}>
                SAT
            </button>
            <span>
              {basketItem && basketItem.amount || 0}
            </span>
            <button className={`${(total + product.price > money) ? "al1" : "al2"}`} disabled={total + product.price > money} onClick={addBasket}>
                AL
            </button>
          </div>
          </div>
        </div>
      </div>
    
    )
  }
  export default Product
