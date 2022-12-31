import {useState} from 'react'
import {useFilter} from "../context/FilterContext";

function Filter() {

  // filtrelenecek kelimeleri filtreliye atmadan önce burada tuttuk.
  const [wordToFilter , setWordToFilter] = useState([])

  // filtrelenecek kelimeleri seçmek için oluşturuldu.
  const {setFiltreli} = useFilter();

  // tıkladığın true ise ekle, false ise çıkart.
  const handleChange = (e) =>{
    if(e.target.checked === true){
      setWordToFilter([...wordToFilter , e.target.value])
    }
    else if(e.target.checked === false){
      setWordToFilter(wordToFilter.filter((item) => (item !== e.target.value) ))
    }
  }
  
  // filtrelenecek kelimeleri yazdır
  const filtreUygula = () =>{
    setFiltreli(wordToFilter)
  }
  
  return (
    <div className='filtreler'>
      <span className='filtre'>
        Filtreler :
      </span>

      <span className='cinsiyet'>
        <input 
        type="checkbox" 
        name='kategori' 
        value="kadin" 
        onChange={handleChange} />
        Kadın

        <input 
        className='erkek' 
        type="checkbox" 
        name='kategori' 
        value="erkek" 
        onChange={handleChange} />
        Erkek
      </span>

      <span className='kategori'>
        <input 
        className='sweatshirt' 
        type="checkbox" 
        name='kategori' 
        value="sweatshirt" 
        onChange={handleChange} />
        Sweatshirt

        <input 
        className='jean' 
        type="checkbox" 
        name='kategori' 
        value="jean" 
        onChange={handleChange} />
        Jean
      </span>

      <span>
        <button onClick={filtreUygula} className='uygula'>Filtreyi uygula</button>
      </span>
    </div>
  )
}
export default Filter