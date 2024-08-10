import { useState } from 'react';
import './App.scss';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="component-wrapper component-wrapper_header">
				<div className="component-wrapper__inner-wrapper component-wrapper__inner-wrapper_header">
					<div className="header">
						<img src="/design-tokens/assets/globe.svg" className="globe-icon" />
						<h1 className="mb-0 text-5xl">Theming With Design Tokens</h1>
					</div>
				</div>
			</div>

			<div className="component-wrapper component-wrapper_themes">
				<div className="component-wrapper__inner-wrapper component-wrapper__inner-wrapper_themes p-4">
					<div className="themes">
						<ul className="themes__unordered-list">
							<li>
								<a href="#" className="link-default">
									Dark mode
								</a>
							</li>
							<li>
								<a href="#" className="link-default">
									Halloween
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="component-wrapper component-wrapper_sign-in">
				<div className="component-wrapper__inner-wrapper component-wrapper__inner-wrapper_sign-in">
					<div className="sign-in">
						<div className="sign-in__left-container">
							Enjoy yourself here theming with CSS variables and design tokens.
						</div>
						<div className="sign-in__right-container">
							<img src="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
