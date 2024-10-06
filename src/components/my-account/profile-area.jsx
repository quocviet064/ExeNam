import React from "react";
import ProfileUserInfo from "./profile-user-info"; // Import ProfileUserInfo
import ProfileInfo from "./profile-info";
import ProfileOrders from "./profile-orders";
import ProfileAddress from "./profile-address";
import ProfileUpdateShop from "./profile-update_shop"; // Import ProfileUpdateShop
import ProfileVoucher from "./profile-voucher"; // Import ProfileVoucher
import ProfilePoint from "./profile-point"; // Import ProfilePoint
import ProfileShape from "./profile-shape";
import ChangePassword from "./change-password";
import MyOrders from "./my-orders";
import ProfileBank from "./profile_bank";
import ProfileNavTab from "./profile-nav-tab"; // Đảm bảo import ProfileNavTab

const ProfileArea = ({ orderData }) => {
  return (
    <section className="profile__area pt-120 pb-120">
      <div className="container">
        <div className="profile__inner p-relative">
          <ProfileShape />
          <div className="row">
            <div className="col-xxl-4 col-lg-4">
              <div className="profile__tab mr-40">
                <ProfileNavTab />
              </div>
            </div>
            <div className="col-xxl-8 col-lg-8">
              <div className="profile__tab-content">
                <div className="tab-content" id="profile-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="d-flex justify-content-between">
                      <div className="flex-grow-1 me-3"> {/* Thêm khoảng cách bên phải */}
                        <ProfileInfo />
                      </div>
                     
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-bank"
                    role="tabpanel"
                    aria-labelledby="nav-bank-tab"
                  >
                    <ProfileBank />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-address"
                    role="tabpanel"
                    aria-labelledby="nav-address-tab"
                  >
                    <ProfileAddress />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-order"
                    role="tabpanel"
                    aria-labelledby="nav-order-tab"
                  >
                    <MyOrders orderData={orderData} />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-update-shop"
                    role="tabpanel"
                    aria-labelledby="nav-update-shop-tab"
                  >
                    <ProfileUpdateShop /> {/* Thêm component ProfileUpdateShop */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-voucher"
                    role="tabpanel"
                    aria-labelledby="nav-voucher-tab"
                  >
                    <ProfileVoucher /> {/* Thêm component ProfileVoucher */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-point"
                    role="tabpanel"
                    aria-labelledby="nav-point-tab"
                  >
                    <ProfilePoint /> {/* Thêm component ProfilePoint */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-password"
                    role="tabpanel"
                    aria-labelledby="nav-password-tab"
                  >
                    <ChangePassword />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileArea;
