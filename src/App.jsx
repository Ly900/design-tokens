import { useState } from 'react';
import './App.scss';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="header">
				<div className="component-wrapper">
					<h1 className="mb-0 text-5xl">Theming With Design Tokens</h1>
				</div>
			</div>
		</>
	);
}

export default App;
