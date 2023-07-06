import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './components/Router'
const root = ReactDOM.createRoot(document.getElementById('root'))
import { Provider } from 'react-redux'
import { store } from './store/root'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

root.render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	</Provider>
)
