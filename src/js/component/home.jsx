import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
/* import { Footer } from "./Footer";
import { CardContainer } from "./cardgroup"; */

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron
				title="A Warm Welcome!"
				description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
				buttonLabel="Click here for more details"
				buttonURL="https://reactjs.org/"
			/>
		{/* 	<CardContainer />
			<Footer /> */}
		</div>
	);
}