import "./main.css";
import { posAction } from "../actions/posActions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Main = ({ posAction, products }) => {
  const [cartItems, setCartItems] = useState([]);
  const [summary, setSummary] = useState({
    subtotal: 0,
    discount: 0,
    grandtotal: 0,
  });

  useEffect(() => {
    posAction();
  }, []);

  console.log(products);

  const onClickProduct = (item) => {
    console.log(item);
    setCartItems((prevItems) => {
      const isItemExist = prevItems.find(
        (i) => i.product_code === item.product_code
      );
      if (isItemExist) {
        //increase by 1
        return prevItems.map((item) => {
          return item.product_code === isItemExist.product_code
            ? { ...item, qty: isItemExist.qty + 1 }
            : item;
        });
      } else {
        const product = { ...item, qty: 1 };
        return [...prevItems, product];
      }
    });
  };

  useEffect(() => {
    //calculate summary
    if (cartItems.length > 0) {
    
      const subtotal = cartItems.reduce((acc, item) => 
        acc + item.qty * item.product_price,0)
        const discount = 0;
        const grandtotal = subtotal + discount;
        setSummary({
          "subTotal": subtotal,
          "discount": discount,
          "grandtotal": grandtotal,
        });
    }
  }, [cartItems]);

  const resetCart=()=>{
    setCartItems([])
    setSummary({
      subtotal: 0,
      discount: 0,
      grandtotal: 0,
    })
  }

  return (
    <>
      <div className="admin-panel layout layout-column">
        <div className="fx-tst">
          <div className="cus-card-pos">
            <div className="rg-sidbr-tp">
              <div className="top-section">
                <div className="order top">
                  <h8>NEPKODER STORE</h8>
                </div>
                <div className="top separator"></div>
                <div className="datetime top">
                  <h8>2025-01-01 11:22 AM</h8>
                </div>
              </div>
              <div className="low-sec">
                <div className="cnt">
                  <div
                    className="a add-customer"
                    style={{ borderLeft: "unset" }}
                  >
                    Walk-In Customer
                  </div>
                  <div className="a add-customer">Add a Note</div>
                  <div
                    className="a add-customer"
                    style={{ borderRight: "unset" }}
                  >
                    Bill Discount
                  </div>
                </div>
              </div>
            </div>

            <div className="right-sidebar-content">
              <div className="mid-cnt" style={{ height: "100vh" }}>
                <div className="product-details-pos">
                  {cartItems &&
                    cartItems.map((item) => {
                      console.log(item);
                      return (
                        <div key={item.main_product_id}>
                          <div className="calc">
                            <h6 className="limit-text">{item.name}</h6>
                            <h6>
                              <span>{item.product_price}</span>
                              {item.qty * item.product_price}
                            </h6>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="rg-sidbr-ft">
                <div className="tot-calc-sec">
                  <div className="total-calc">
                    <h5>Sub Total</h5>
                    <h5>{summary.subtotal}</h5>
                  </div>
                  <div className="total-discount">
                    <h3>(Discount)</h3>
                    <h4>{summary.discount}</h4>
                  </div>
                  <div className="gnd-tot-calc">
                    <h5>Grand Total</h5>
                    <h4>{summary.grandtotal}</h4>
                  </div>
                </div>
                <div className="cnt-footer">
                  <div style={{ backgroundColor: "red" }} className="b clear" onClick={resetCart}>
                    <h3>Reset Cart</h3>
                  </div>
                  <div className="b check-out">
                    <h3>Pay Now</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-list-section">
            <div className="rg-pdt-sea-pos">
              <div className="cat-toggle">
                <p>All Products</p>
              </div>
              <div className="search-form">
                <input
                  type="text"
                  name="search"
                  placeholder="Search for Product"
                  autoComplete="off"
                  className="search"
                />
                <button type="submit" className="btn btn-transparent">
                  <i className="icon dosearch" />
                </button>
              </div>
              <div className="his-nw">
                <p>User: Sujan</p>
              </div>
              <div className="his-nw logout">
                <p>Logout</p>
              </div>
            </div>
            <ul className="product-list-pos">
              <div className="right-product-side">
                {products &&
                  products.map((item, main_product_id) => {
                    return (
                      <li key={main_product_id} className="med-obj-pos">
                        <div
                          className="media-thumb-pos"
                          onClick={() => onClickProduct(item)}
                        >
                          <img
                            src="https://waiwai.com.np/wp-content/uploads/2023/05/Wai-Wai-Chicken-1-1.png"
                            alt="wai wai"
                            className="img-res"
                          />
                        </div>
                        <div className="media-desp-pos">
                          <div className="product-desp-pos">
                            <h3>{item.name}</h3>
                            <span>{item.product_price}</span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToprops = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = { posAction };

export default connect(mapStateToprops, mapDispatchToProps)(Main);
