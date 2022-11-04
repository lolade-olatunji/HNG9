import React, { useState } from 'react';
import './contact.css';
import Footer from '../../components/Footer';

const contact = () => {
  const [name, setName] = useState("Ololade Olatunji");
	return (
		<div id="contact-page">
			<div className="container">
				<div className="header">
					<h1 className="co-me">Contact Me</h1>
					<p className="sub">Hi there, contact me to ask me about anything you have in mind.</p>
				</div>

				<div className="form-section">
					<div className="form-inline">
						<div className="form-control first">
							<label className="form-label" for="first-name">
								First Name
							</label>
							<input
								className="form-input"
								type="text"
								id="first-name"
								placeholder="Enter your first name"
							/>
						</div>

						<div className="form-control last">
							<label className="form-label" for="Last-Name">
								Last Name
							</label>
							<input
								className="form-input"
								type="text"
								id="Last-Name"
								placeholder="Enter your last name"
							/>
						</div>
					</div>

					<div className="form-control">
						<label className="form-label" for="email">
							Email
						</label>
						<input className="form-input" type="email" id="email" placeholder="yourname@email.com" />
					</div>

					<div className="form-control">
						<label className="form-label" for="Meesage">
							Message
						</label>
						<textarea
							name="Message"
							rows="6"
							placeholder="Send me a message and I'll reply you as soon as possible"
						/>
					</div>

					<div className="checkbox">
						<input type="checkbox" />
						<span className="span">
							{`You agree to providing your data to ${name} who may contact you.`}
						</span>
					</div>
					<button id="btn__submit" className="submit">
						Send message
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default contact;
