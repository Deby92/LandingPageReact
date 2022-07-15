import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Cardgroup from "./Cardgroup";
//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron
        title="A Warm Welcome!"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
        buttonLabel="Click here for more details"
        buttonURL="https://reactjs.org/"
      />

      <div className="row m-3">
        <Cardgroup img="http://placekitten.com/500/325" title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim 
				venia" />
        <Cardgroup img="http://placekitten.com/500/325" title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim veniam eos aspernatur eius possimus unde corporis dolorum maiores sed" />
        <Cardgroup img="http://placekitten.com/500/325" title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim venia" />
        <Cardgroup img="http://placekitten.com/500/325" title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim veniam eos aspernatur eius possimus unde corporis dolorum maiores sed" />
      </div>
      <Footer />
    </>
  );
};

export default Home;