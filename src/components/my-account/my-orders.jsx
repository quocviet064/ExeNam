import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBox, faTruck, faCheckCircle, faSpinner, faShippingFast, faBoxOpen, faTruckLoading } from '@fortawesome/free-solid-svg-icons';

const MyOrders = ({ orderData }) => {
  const order_items = orderData?.orders;

  // const orderStatuses = [
  //   { status: "Đã đặt", icon: faBox, color: "#007bff" },
  //   { status: "Đang chuẩn bị", icon: faSpinner, color: "#ffc107" },
  //   { status: "Đã chuẩn bị xong", icon: faBoxOpen, color: "#17a2b8" },
  //   { status: "Đang vận chuyển", icon: faTruck, color: "#6610f2" },
  //   { status: "Đang giao", icon: faTruckLoading, color: "#fd7e14" },
  //   { status: "Đã giao", icon: faCheckCircle, color: "#28a745" },
  //   { status: "Hoàn tất", icon: faShippingFast, color: "#20c997" }
  // ];


  const orderStatuses = [
    { status: "Đã đặt",  color: "#007bff" },
    { status: "Đang chuẩn bị",  color: "#ffc107" },
    { status: "Đã chuẩn bị xong",  color: "#17a2b8" },
    { status: "Đang vận chuyển",  color: "#6610f2" },
    { status: "Đang giao",  color: "#fd7e14" },
    { status: "Đã giao",  color: "#28a745" },
    { status: "Hoàn tất",  color: "#20c997" }
  ];

  const timelineEvents = [
    "Đặt hàng thành công",
    "Đang chuẩn bị đơn hàng",
    "Đã chuẩn bị xong đơn hàng",
    "Đơn vị vận chuyển đã lấy được hàng",
    "Đơn hàng đang được vận chuyển",
    "Đơn hàng đang được giao",
    "Đã giao đơn hàng",
    "11"
  ];

  return (
    <div className="profile__orders">
      {!order_items || order_items?.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <FontAwesomeIcon icon={faBox} style={{ fontSize: '3rem', marginBottom: '1rem' }} />
          <p>Bạn chưa có đơn hàng nào!</p>
        </div>
      ) : (
        order_items.map((item, i) => (
          <div key={i} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #dee2e6', borderRadius: '0.25rem', backgroundColor: '#f8f9fa' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h5 style={{ margin: 0 }}>Đơn hàng #{item._id.substring(20, 25)}</h5>
              <Link href={`/order/${item._id}`} style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', lineHeight: '1.5', borderRadius: '0.2rem', color: '#007bff', backgroundColor: 'transparent', borderColor: '#007bff', textDecoration: 'none', border: '1px solid' }}>
                Theo dõi đơn hàng
              </Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              {orderStatuses.map((status, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: item.status === status.status ? status.color : '#e9ecef', marginBottom: '0.5rem' }}>
                    <FontAwesomeIcon icon={status.icon} style={{ color: item.status === status.status ? 'white' : '#6c757d', fontSize: '1rem' }} />
                  </div>
                  <p style={{ margin: '0', fontSize: '0.75rem' }}>{status.status}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <p style={{ margin: '0.5rem 0 0' }}>Trạng thái hiện tại: {item.status}</p>
              <small>{new Date(item.createdAt).toLocaleDateString()}</small>
            </div>
            <div>
              {timelineEvents.map((event, index) => (
                <div key={index} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '15px' }}>
                  <div style={{ position: 'absolute', left: '0', top: '0', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: index <= orderStatuses.findIndex(s => s.status === item.status) ? '#007bff' : '#e9ecef' }}></div>
                  {index !== timelineEvents.length - 1 && (
                    <div style={{ position: 'absolute', left: '7px', top: '15px', bottom: '-15px', width: '2px', backgroundColor: index < orderStatuses.findIndex(s => s.status === item.status) ? '#007bff' : '#e9ecef' }}></div>
                  )}
                  <div style={{ marginLeft: '10px' }}>
                    <h6 style={{ margin: '0 0 0.25rem' }}>{event}</h6>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#6c757d' }}>{new Date(item.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;