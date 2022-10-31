import { useState } from "react";
import MenuItem from "./menuItem";

function Menu() {

  const [items, setItems] = useState([
    {name: "Главная", path: "/", classN: "menu__item menu__item-active"},
    {name: "Дрифт-такси", path: "/drift", classN: "menu__item"},
    {name: "Time Attack", path: "/timeattack", classN: "menu__item"},
    {name: "Forza Karting", path: "/forza", classN: "menu__item"},
  ])

  const handleClick = e => {
    const elem = e.target.textContent;
    setItems((prev) => {
      prev = [
        {name: "Главная", path: "/", classN: "menu__item"},
        {name: "Дрифт-такси", path: "/drift", classN: "menu__item"},
        {name: "Time Attack", path: "/timeattack", classN: "menu__item"},
        {name: "Forza Karting", path: "/forza", classN: "menu__item"},
      ];
      
      const arr = [];

      prev.forEach((a,i) => {
        if (a.name === elem && typeof elem === 'string') {
          arr.push(a);
          arr[i].classN = "menu__item menu__item-active";
        } else arr.push(a);
      })

      return arr;
    })
  };

  return (
    <nav className="menu">
      {items.map((a,i) => <MenuItem key={i} name={a.name} path={a.path} clName={a.classN} click={handleClick} />)}
    </nav>
  );
}

export default Menu;