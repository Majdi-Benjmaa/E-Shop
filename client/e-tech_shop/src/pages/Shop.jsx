import React, { useState } from "react";
import CommonSection from "../components/UI/commonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/productList";

const Shop = () => {
  const [productsData, SetProductsData] = useState(products);

  const handleFilter = (e) => {
    const filtervalue = e.target.value;
    if (filtervalue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      SetProductsData(filteredProducts);
    }

    if (filtervalue === "head-Phone") {
      const filteredProducts = products.filter(
        (item) => item.category === "head-Phone"
      );
      SetProductsData(filteredProducts);
    }

    if (filtervalue === "tv") {
      const filteredProducts = products.filter(
        (item) => item.category === "tv"
      );
      SetProductsData(filteredProducts);
    }

    if (filtervalue === "smatrt-watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "smatrt-watch"
      );
      SetProductsData(filteredProducts);
    }
  };
  const handleSearch = e =>{
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    SetProductsData(searchedProducts)
  }

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="mobile">mobile</option>
                  <option value="head-Phone">head-Phone</option>
                  <option value="tv">tv</option>
                  <option value="smart-watch">smart-watch</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end"></Col>
            <div className="filter__widget">
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
            <Col lg="6" md="12"></Col>
            <div className="search__box">
              <input type="text" placeholder="Search...." onChange={handleSearch} />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No Products Are Found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
