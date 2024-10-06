import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
// internal
import { User } from "@/svg";
import { userLoggedOut } from "@/redux/features/auth/authSlice";

const NavProfileTab = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  // handle logout
  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push('/');
  };

  // Fake order data
  const fakeOrders = [
    {
      id: 1,
      productName: "Cây cảnh phong thủy",
      quantity: 2,
      status: "Đang giao",
      totalPrice: 599000,
      image: "/images/product-1.jpg"
    },
    {
      id: 2,
      productName: "Hoa lan đột biến",
      quantity: 1,
      status: "Đã nhận",
      totalPrice: 1500000,
      image: "/images/product-2.jpg"
    },
    {
      id: 3,
      productName: "Bonsai mini",
      quantity: 3,
      status: "Chờ xử lý",
      totalPrice: 450000,
      image: "/images/product-3.jpg"
    },
    {
      id: 4,
      productName: "Cây ăn quả",
      quantity: 1,
      status: "Đã hủy",
      totalPrice: 350000,
      image: "/images/product-4.jpg"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Đang giao": return "text-info";
      case "Đã nhận": return "text-success";
      case "Chờ xử lý": return "text-warning";
      case "Đã hủy": return "text-danger";
      default: return "text-secondary";
    }
  };

  return (
    <div className="profile__main">
      <div className="profile__main-top pb-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="profile__main-inner d-flex flex-wrap align-items-center">
              <div className="profile__main-content">
                <h4 className="profile__main-title">Xin chào, {user?.name}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile__main-logout text-sm-end">
              <a onClick={handleLogout} className="cursor-pointer tp-logout-btn">
                Đăng xuất
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__main-orders">
        <h4 className="mb-3">Đơn hàng gần đây</h4>
        {fakeOrders.length > 0 ? (
          fakeOrders.map((order, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img src={order.image} alt={order.productName} className="img-fluid rounded" style={{maxHeight: "80px", objectFit: "cover"}} />
                  </div>
                  <div className="col-md-4">
                    <h5 className="card-title">{order.productName}</h5>
                    <p className="card-text">Số lượng: {order.quantity}</p>
                  </div>
                  <div className="col-md-2">
                    <p className="card-text">
                      <span className={`fw-bold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-2">
                    <p className="card-text fw-bold">{order.totalPrice.toLocaleString()} VND</p>
                  </div>
                  <div className="col-md-2 text-end">
                    <Link href={`/order/${order.id}`} className="btn btn-outline-primary btn-sm">
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Không có đơn hàng nào.</p> // Thông báo nếu không có đơn hàng
        )}
        <div className="text-center mt-4">
          <Link href="/my-orders" className="btn btn-primary">
            Xem tất cả đơn hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavProfileTab;