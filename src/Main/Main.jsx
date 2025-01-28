import "./main.css";

const Main = () => {
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
                  {Array.from({ length: 10 }).map((_, index) => {
                    return (
                      <div key={index}>
                        <div className="calc">
                          <h6 className="limit-text">12 × Wai Wai</h6>
                          <h6>
                            <span>Rs. 999</span>
                            Rs. 87383
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
                    <h5>Rs. 9999</h5>
                  </div>
                  <div className="total-discount">
                    <h3>(Discount)</h3>
                    <h4>Rs. 4546.02</h4>
                  </div>
                  <div className="gnd-tot-calc">
                    <h5>Grand Total</h5>
                    <h4>Rs. 99999</h4>
                  </div>
                </div>
                <div className="cnt-footer">
                  <div style={{ backgroundColor: "red" }} className="b clear">
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
                {Array.from({ length: 100 }, (_, index) => {
                  return (
                    <li key={index} className="med-obj-pos">
                      <div className="media-thumb-pos">
                        <img src="" alt="" className="img-res" />
                      </div>
                      <div className="media-desp-pos">
                        <div className="product-desp-pos">
                          <h3>Wai Wai Noodles</h3>
                          <span>Rs. 999</span>
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

export default Main;
