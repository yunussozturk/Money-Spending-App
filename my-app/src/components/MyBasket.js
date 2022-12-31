import React from 'react'

function MyBasket({basket , setBasket , total}) {

  const resetBasket = () =>{
    setBasket([]);
  }

  return (
    <div>       
        <div className='myBasket1'>
            <div className='myBasket2'>
                Sepettekiler :
            </div> 
            {basket.length !== 0 ? ( 
            <div>
                {basket.map((item , key={key}) => (
                    <div key={key}>
                        <div className='myBasket3'>
                            {`${item.amount} adet ${item.model}`}
                        </div>
                        <div className='myBasket4'>
                            {`${item.price*item.amount} TL`}
                        </div>
                    </div>               
                ))}
            </div> 
            ):
            (
                <div className='myBasket4'>
                    Sepetiniz boş...
                </div>
            )
            }
        </div>  

        <div className='myBasket5'>
            <span className='myBasket6'>Toplam Tutar :</span>{total} TL
        </div>

        <div className='myBasket7'>
            <button className='myBasket8' onClick={resetBasket} >Sepeti Sıfırla</button>
        </div>
    </div>
  )
}
export default MyBasket;