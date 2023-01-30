import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import Cart from '../pages/Cart'
const isAuth = false
const AppRouter = () => {

	return (
		<Routes>
			<Route path='/' element={Cart}></Route>
			{isAuth && authRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={Component} exact />
			)}
			{publicRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={Component} exact />
			)}
		</Routes>
	)
}

export default AppRouter