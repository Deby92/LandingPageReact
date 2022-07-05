import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";
import { CardContainer } from "./cardgroup";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<CardContainer />
			<Footer/>
		</div>
	);
}