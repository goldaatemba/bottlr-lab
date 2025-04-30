import App from "./App"
import Collection from "./Pages/Collection.jsx"
import Enlisted from "./Pages/Enlisted"
import ErrorPage from "./Pages/ErrorPage"

const routes = [
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <App />,
        children: [
            {
                path: '/collection',
                element: <Collection />,
            },
            {
                path: '/enlisted',
                element: <Enlisted />
            }
        ]
    }
]

export default routes