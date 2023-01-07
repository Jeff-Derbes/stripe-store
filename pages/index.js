import Head from "next/head";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

export default function Home({ products, bannerData }) {
  console.log(products[0]);
  return (
    <>
      <div>
        <HeroBanner heroBanner={bannerData[0]} />

        <div className="products-heading">
          <h2>Featured Products</h2>
        </div>

        <div className="products-container">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
