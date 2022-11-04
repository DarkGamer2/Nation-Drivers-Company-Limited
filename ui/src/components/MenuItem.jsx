import DropdownMenuItem from "./DropdownMenuItem";

const MenuItem=({items})=>{

    return(
        <li className="menu-items">
            {
                items.submenu?(
                    <>
                    <button type="button" aria-haspopup="menu">
                        {items.title}{" "}
                    </button>
                    <DropdownMenuItem submenus={items.submenu}/>
                    </>
                ):(
                    <a href={items.url}>{items.title}</a>
                )
            }
        </li>
    )
}

export default MenuItem;