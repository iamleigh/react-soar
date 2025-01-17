import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "@styles/soaricons.scss";
import App from './App.tsx'

async function enableMocking() {
	const { worker } = await import( './mocks/browser' )

	// `worker.start()` returns a Promise that resolves
	// once the Service Worker is up and ready to intercept requests.
	return worker.start({
		onUnhandledRequest: 'bypass'
	})
}

enableMocking().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	)
})
