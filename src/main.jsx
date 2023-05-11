import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './router/router.jsx'
import { Provider } from 'react-redux'
<<<<<<< HEAD
import store from './store/store.jsx'
=======
import store from './store/store'
>>>>>>> fff0b7adf901b2e18a1009808e2b8fb6519574e6

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
)
