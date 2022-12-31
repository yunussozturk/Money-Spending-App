import {createContext , useState , useContext} from "react";

const FilterContext = createContext();

export const FilterProvider = ({children}) =>{
    const [filtreli , setFiltreli] = useState([])

    const values = {filtreli , setFiltreli};

    return(
        <FilterContext.Provider value={values}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => useContext(FilterContext);