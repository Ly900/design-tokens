import { useState } from 'react';
import './App.scss';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* Header */}
			<div className="component-wrapper component-wrapper_header">
				<div className="component-wrapper__inner-wrapper component-wrapper__inner-wrapper_header">
					<div className="header">
						<img src="/design-tokens/assets/globe.svg" className="globe-icon" />
						<h1 className="mb-0 text-5xl">Theming With Design Tokens</h1>
					</div>
				</div>
			</div>

			{/* Themes  */}
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

			{/* Sign In */}
			<div className="component-wrapper component-wrapper_sign-in">
				<div className="component-wrapper__inner-wrapper component-wrapper__inner-wrapper_sign-in">
					<div className="sign-in">
						<div className="sign-in__left-container">
							<p className="sign-in__text mb-5">
								Enjoy yourself here theming with CSS variables and design
								tokens.
							</p>
							<a href="#" className="btn-default mb-0">
								Primary Button
							</a>
						</div>
						<div className="sign-in__right-container"></div>
					</div>
				</div>
			</div>

			{/* Mini Tiles */}
			<div className="component-wrapper component-wrapper_mini-tiles pb-6">
				<div className="component-wrapper__inner-wrapper component-wrapper__inner-wrapper_mini-tiles">
					<div className="mini-tiles">
						<div className="mini-tiles__text-container mb-4">
							<h2 className="mini-tiles__heading">
								What's your favorite holiday?
							</h2>
						</div>
						<div className="mini-tiles__tiles-container mb-10">
							<ul className="mini-tiles__unordered-list">
								<li className="mini-tiles__list-item p-2">Halloween</li>
								<li className="mini-tiles__list-item p-2">Thanksgiving</li>
								<li className="mini-tiles__list-item p-2">Christmas</li>
								<li className="mini-tiles__list-item p-2">New Year</li>
								<li className="mini-tiles__list-item p-2">MLK Jr Day</li>
								<li className="mini-tiles__list-item p-2">None</li>
							</ul>
						</div>
						<div className="mini-tiles__call-to-action text-center">
							<button className="btn-secondary">Secondary Button</button>
						</div>
					</div>
				</div>
			</div>

			{/* Pop Out */}
			<div className="component-wrapper component-wrapper_pop-out pb-6">
				<div className="component-wrapper__inner-wrapper component-wrapper__inner-wrapper_pop-out">
					<div className="pop-out">
						<div className="pop-out__left-container mb-4 md:mb-0">
							<h2 className="pop-out__subheading mb-4">Lorem ipsum dolor</h2>
							<p className="pop-out__text mb-8">
								Lorem ipsum dolor sit amet consectetur adipiscing.
							</p>
							<button className="btn-default mb-6">Primary Button</button>
						</div>
						<div className="pop-out__right-container mb-10 md:mb-0"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
