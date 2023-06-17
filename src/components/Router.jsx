import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from './Container/Container.module'
import { Panel } from './Panel/Panel.module'
import { Temperature } from './Panel/Temperature/Temperature.module'
import { Info } from './Container/Info/Info.module'
import { Hourly } from './Container/Hourly/Hourly.module'
import { ErrorPage } from './ErrorPage/errorPage'
export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<Container>
							<Panel>
								<Temperature />
							</Panel>

							<Info>
								<Hourly></Hourly>
							</Info>
						</Container>
					}
				/>
				<Route path='*' element={<ErrorPage/>} />
			</Routes>
		</BrowserRouter>
	)
}
