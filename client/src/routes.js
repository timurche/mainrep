import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Shop from './pages/Shop'
import { ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/links'

export const authRoutes = [
	{ path: ADMIN_ROUTE, Component: Admin },
	{ path: CART_ROUTE, Component: Cart }
]

export const publicRoutes = [
	{ path: LOGIN_ROUTE, Component: Auth },
	{ path: REGISTRATION_ROUTE, Component: Auth },
	{ path: SHOP_ROUTE, Component: Shop },
	{ path: PRODUCT_ROUTE + '/:id', Component: Product },
]