import '../App.css';
import Header from './Header';
import {useState , useEffect} from "react";
import Product from './Product';
import Filter from "./Filter";
import MyBasket from "./MyBasket";
import {useFilter} from "../context/FilterContext";
import products from "../product.json";

function Container() {

  // money = harcamak için başlangıç paramız. basket = satın aldıklarımız. total = satın aldıklarımız toplam fiyatı.
  const [money , setMoney] = useState(3000)
  const [basket , setBasket] = useState([])
  const [total , setTotal] = useState(0)

  // basket içindeki price'leri total içinde topladık.
  useEffect(() =>{
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    },0))
  },[basket])

  // filtreleyeceğimiz kelimeleri tuttuk(kadin-erkek-sweatshirt-jean)
  const {filtreli} = useFilter();
  
  // ürünlerin filtrelenmiş halini tuttuk.
  const [filtered , setFiltered] = useState([]);
  useEffect(() =>{
    setFiltered(products)

    if((filtreli.includes("kadin") === true) && (filtreli.includes("erkek") === false)){ 
        console.log(filtreli)      
        console.log("kadin")
        setFiltered(products.filter((item) => item.gender === "woman"))

        if((filtreli.includes("sweatshirt") === true) && (filtreli.includes("jean") === false)){
            console.log(filtreli)
            console.log("kadin sweatshirt")
            setFiltered(products.filter((item) => item.gender === "woman" && item.title === "sweatshirt")) 
        }else if((filtreli.includes("sweatshirt") === false) && (filtreli.includes("jean") === true)){
            console.log(filtreli)
            console.log("kadin jean")
            setFiltered(products.filter((item) => item.gender === "woman" && item.title === "jean")) 
        }else if((filtreli.includes("sweatshirt") === true) && (filtreli.includes("jean") === true)){
            console.log(filtreli)
            console.log("kadin sweatshirt ve jean")
            setFiltered(products.filter((item) => item.gender === "woman")) 
        }
    }

    else if((filtreli.includes("erkek") === true) && (filtreli.includes("kadin") === false)){ 
        console.log(filtreli)      
        console.log("erkek")
        setFiltered(products.filter((item) => item.gender === "man"))

        if((filtreli.includes("sweatshirt") === true) && (filtreli.includes("jean") === false)){
            console.log(filtreli)
            console.log("erkek sweatshirt")
            setFiltered(products.filter((item) => item.gender === "man" && item.title === "sweatshirt")) 
        }else if((filtreli.includes("sweatshirt") === false) && (filtreli.includes("jean") === true)){
            console.log(filtreli)
            console.log("erkek jean")
            setFiltered(products.filter((item) => item.gender === "man" && item.title === "jean")) 
        }else if((filtreli.includes("sweatshirt") === true) && (filtreli.includes("jean") === true)){
            console.log(filtreli)
            console.log("erkek sweatshirt ve jean")
            setFiltered(products.filter((item) => item.gender === "man"))
        }
    }

    else if((filtreli.includes("kadin") === true) && (filtreli.includes("erkek") === true)){ 
        console.log(filtreli)      
        console.log("kadin ve erkek")
        setFiltered(products.filter((item) => item.gender === "woman" || item.gender === "man"))
        if((filtreli.includes("sweatshirt") === true) && (filtreli.includes("jean") === false)){
            console.log(filtreli)
            console.log("kadin erkek sweatshirt")
            setFiltered(products.filter((item) => item.title === "sweatshirt")) 
        }else if((filtreli.includes("sweatshirt") === false) && (filtreli.includes("jean") === true)){
            console.log(filtreli)
            console.log("kadin erkek jean")
            setFiltered(products.filter((item) => item.title === "jean"))
        }else if((filtreli.includes("sweatshirt") === true) && (filtreli.includes("jean") === true)){
            console.log(filtreli)
            console.log("kadin erkek sweatshirt ve jean")
            setFiltered(products)
        }
    }

    else if((filtreli.includes("kadin") === false) && (filtreli.includes("erkek") === false)){
        console.log(filtreli)      
        console.log("sweatshirt ve jean")
        if((filtreli.includes("sweatshirt") === true) && (filtreli.includes("jean") === false)){
            console.log(filtreli)
            console.log("sweatshirt") 
            setFiltered(products.filter((item) => item.title === "sweatshirt"))           
        }
        else if((filtreli.includes("sweatshirt") === false) && (filtreli.includes("jean") === true)){
            console.log(filtreli)
            console.log("jean")  
            setFiltered(products.filter((item) => item.title === "jean"))         
        }
    }
    },[filtreli])

  return (
    <div>
      <Header money={money} total={total} /> 
      <Filter />
      <div className='urunler'>
      {filtered.map((product) => (
        <Product key={product.id} product={product} total={total} money={money} basket={basket} setBasket={setBasket} />
      ))} 
      </div>
      <MyBasket basket={basket} setBasket={setBasket} total={total} />
    </div>
  );
}
export default Container;