import React from "react";

function Header({money , total}){
    return(
    <div className="header">
        Harcamak için {money - total} TL paranız var !
    </div>
    )
}
export default Header;