import { useRoutes } from "react-router-dom";
import Login from "components/Forms/Login";
import Comments from "components/Forms/Comments";
import Public from "components/Router/Public";
import Private from "components/Router/Private";

const routes = [
    {
        path:"login",
        element:<Public/>,
        children:[
            {
                index:true,
                element:<Login/>
            }
        ]
   },
   {
        path:"post",
        element:<Private/>,
        children:[
            {
                index:true,
                element:<Comments/>
            }
        ]
   }
];

export const Routes = () => useRoutes(routes);