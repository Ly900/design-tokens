import { useState } from 'react';
import './App.scss';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="component-wrapper component-wrapper__header">
				<div className="component-wrapper__inner-wrapper">
					<div className="header">
						<img src="/design-tokens/assets/globe.svg" className="globe-icon" />
						<h1 className="mb-0 text-5xl">Theming With Design Tokens</h1>
					</div>
				</div>
			</div>

			<div className="themes">
				<div className="component-wrapper">
					<div className="component-wrapper__inner-wrapper">
						<div className="buttons-wrapper">
							<button>Dark mode</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
