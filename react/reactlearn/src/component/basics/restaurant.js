import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import Menucardss from "./menucard";
import Navbar from "./Navbar";

const unquie = [...new Set(Menu.map((curElm) => {
return curElm.category;
})
),
"ALL",
]
const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(unquie)

//    const filterItem = (category) => {
   
//     });
//     setMenuData(updatedList);
   
const filterItem = (category) => {
    if(category === "ALL"){
        setMenuData(Menu);
        return
    }

    const updatedList = Menu.filter((curElm) =>{
        return curElm.category === category;
    });
    setMenuData(updatedList);
};

return (
    
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <Menucardss Menuds={menuData}/>
    
</>
);
};

export default Restaurant;