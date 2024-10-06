/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Footer from "@/layout/footers/footer";
import Link from "next/link";

export default function Home() {
  const productImage =
    "https://foli.ca/cdn/shop/products/CPCo-0366_b4e112b7-aab7-44bd-b65f-ad033ba9bc88.jpg?v=1724208473&width=500";

  return (
    <Wrapper>
      <SEO pageTitle="Home" />
      <Header />
      <div>
        <style jsx>{`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .hero {
            background-color: #e6f0e6;
            padding: 3rem 0;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .hero-text {
            flex: 1;
          }

          .hero-image {
            flex: 1;
          }

          .hero h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .button {
            background-color: #16a34a;
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 0.375rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .button:hover {
            background-color: #15803d;
          }

          .section {
            padding: 3rem 0;
          }

          .section-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
          }

          .grid {
            display: grid;
            gap: 1rem;
          }

          .product-card {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }

          .product-image {
            width: 100%;
            height: 12rem;
            object-fit: cover;
          }

          .product-info {
            padding: 1rem;
          }

          .product-name {
            font-weight: 600;
          }

          .product-price {
            color: #16a34a;
            font-weight: bold;
          }

          .sale-price {
            color: #dc2626;
          }

          .category-card {
            text-align: center;
          }

          .category-image {
            width: 100%;
            height: 8rem;
            object-fit: cover;
          }

          .review-card {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            padding: 1rem;
          }

          .reviewer {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
          }

          .reviewer-image {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 0.5rem;
          }

          .stars {
            color: #fbbf24;
          }

          .reason-icon {
            width: 3rem;
            height: 3rem;
            object-fit: cover;
            border-radius: 50%;
            margin: 0 auto 0.5rem;
          }

          .blog-post {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }

          .blog-image {
            width: 100%;
            height: 12rem;
            object-fit: cover;
          }

          .blog-content {
            padding: 1rem;
          }

          .read-more {
            font-size: 0.875rem;
            color: #4b5563;
          }

          @media (min-width: 640px) {
            .hero-content {
              flex-direction: row;
            }

            .grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 768px) {
            .grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .grid-5 {
              grid-template-columns: repeat(5, 1fr);
            }
          }
        `}</style>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Buy more, save more!</h1>
                <p>Get 15% off when you buy 2 or more plants</p>
                <button className="button">Shop Plants</button>
              </div>
              <div className="hero-image">
                <img src={productImage} alt="Plants" />
              </div>
            </div>
          </div>
        </section>

        {/* Recently Added */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Recently Added</h2>
            <div className="grid grid-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="product-card">
                  <Link href="#">
                    <img
                      src={productImage}
                      alt={`Plant ${i}`}
                      className="product-image"
                    />
                    <div className="product-info">
                      <h3 className="product-name">Plant Name</h3>
                      <p className="product-price">$19.99</p>
                      <button className="button">Add to Cart</button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plants on Sale */}
        <section className="section" style={{ backgroundColor: "#fff7ed" }}>
          <div className="container">
            <h2 className="section-title">Plants on Sale</h2>
            <div className="grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="product-card">
                  <img
                    src={productImage}
                    alt={`Sale Plant ${i}`}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-name">Sale Plant</h3>
                    <p className="sale-price">$14.99</p>
                    <button className="button">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Popular Categories</h2>
            <div className="grid grid-5">
              {["Indoor", "Outdoor", "Succulents", "Herbs", "Flowers"].map(
                (category) => (
                  <div key={category} className="category-card">
                   <Link href="#">
                      <img
                        src={productImage}
                        alt={category}
                        className="category-image"
                      />
                      <h3>{category}</h3>
                   </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Featured Reviews */}
        <section className="section" style={{ backgroundColor: "#f3f4f6" }}>
          <div className="container">
            <h2 className="section-title">Featured Reviews</h2>
            <div className="grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="review-card">
                  <div className="reviewer">
                    <img
                      src={productImage}
                      alt={`Reviewer ${i}`}
                      className="reviewer-image"
                    />
                    <div>
                      <h4>Customer Name</h4>
                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                  <p>"Great plants, fast delivery!"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Order from Us */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">
              Why order plants online from Plantsome?
            </h2>
            <div className="grid">
              {[
                "Shop Online",
                "Fast Delivery",
                "Quality Guarantee",
                "Expert Support",
              ].map((reason) => (
                <div key={reason} className="category-card">
                  <Link href="#">
                    <img
                      src={productImage}
                      alt={reason}
                      className="reason-icon"
                    />
                    <h3>{reason}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="section" style={{ backgroundColor: "#f0fdf4" }}>
          <div className="container">
            <h2 className="section-title">Recent Blog Posts</h2>
            <div className="grid">
              {[
                "Seasonal Plant Care",
                "Indoor Gardening Tips",
                "Plant Health Guide",
              ].map((post) => (
                <div key={post} className="blog-post">
                  <Link href="#">
                    <img src={productImage} alt={post} className="blog-image" />
                    <div className="blog-content">
                      <h3>{post}</h3>
                      <p className="read-more">Read more...</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
}
