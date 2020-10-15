import React from "react";
import "./styles/home.scss";
import Product from "../components/product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/ServiceMktg/1500x600_Hero-Tall_np._CB403152874_.jpg"
        alt="amazon prime"
      />
      <div className="home__row">
        <Product
          id={Math.floor(Math.random() * 100)}
          title="Redux Analogue Blue Dial Men’s & Boy's Watch"
          price={299}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81BDpSIwu3L._UL1500_.jpg"
        />
        <Product
          id={Math.floor(Math.random() * 100)}
          title="Think Like a Monk Paperback – 8 September 2020"
          price={388}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"
        />
        <Product
          id={Math.floor(Math.random() * 100)}
          title="Harry Potter and the Philosopher's Stone Paperback – 3 September 2014"
          price={285}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51ifu1aebKL._SX332_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={Math.floor(Math.random() * 100)}
          title="OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
          price={"14,999.00"}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/817gj7pfUzL._SX522_.jpg"
        />
        <Product
          id={Math.floor(Math.random() * 100)}
          title="Apple iPhone 11 (64GB) - White"
          price={"61,990"}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={Math.floor(Math.random() * 100)}
          title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1-inch FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/MS Office/NVIDIA GTX 1650 4GB/Shadow Black), 16-a0022TX"
          price={"78,990.00"}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SX679_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
