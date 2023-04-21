import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Route( {path, children} ) {
    const { currentPath } = useContext(NavigationContext);

    return (path === currentPath) && children;
}

export default Route;