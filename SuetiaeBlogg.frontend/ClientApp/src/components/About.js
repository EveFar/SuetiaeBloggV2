import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
	render() {
		return (
			<Container>
				<Row className="show-grid text-center">
			<Col xs={12} sm={4} className="person-wrapper">
				<Image src="bilder/Person-1.jpg" circle="true" className="profile-pic" />
				<h3>Manjula</h3>
				<p>Living abroad since 2010. Specialized in software engineering, Manjula has worked ever since in online business. Following her professional commitments, she has moved to various countries: Great-Britain, Canada, Australia and Sweden where she currently lives.</p>
					</Col>
			<Col xs={12} sm={4} className="person-wrapper">
				<Image src="bilder/Person-2.jpg" circle="true" className="profile-pic" />
				<h3>Kitty</h3>
				<p>Singaporean, living abroad since 2015. Residing in Umeå, and sharing her everyday memories, one Swedish adventure at the time!.</p>
			</Col>
			<Col xs={12} sm={4} className="person-wrapper">
				<Image src="bilder/Person-3.jpg" circle="true" className="profile-pic" />
				<h3>Ramonda</h3>
				<p> Writes about life as an expat wife. Countries I live in and travel to. Personal thoughts & reflections on my life in Sweden.</p>
			</Col>
				</Row >
			</Container >
		)
	}
}