import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faPaintBrush, faStore, faSeedling } from '@fortawesome/free-solid-svg-icons';

const ProfileUpdateShop = () => {
  const updates = [
    {
      id: 1,
      title: "Bộ sưu tập cây cảnh mới",
      description: "Chúng tôi vừa nhập về bộ sưu tập cây cảnh độc đáo từ vùng nhiệt đới.",
      date: new Date("2023-06-15T10:00:00"), // Thêm thời gian
      icon: faLeaf
    },
    {
      id: 2,
      title: "Cập nhật thiết kế cửa hàng",
      description: "Cửa hàng của chúng tôi đã được trang trí lại với phong cách mới, tạo không gian xanh mát.",
      date: new Date("2023-06-10T14:30:00"), // Thêm thời gian
      icon: faPaintBrush
    },
    {
      id: 3,
      title: "Mở rộng chuỗi cửa hàng",
      description: "Chúng tôi vui mừng thông báo về việc mở thêm 2 chi nhánh mới tại Hà Nội và Đà Nẵng.",
      date: new Date("2023-06-05T09:15:00"), // Thêm thời gian
      icon: faStore
    },
    {
      id: 4,
      title: "Dịch vụ chăm sóc cây trọn gói",
      description: "Ra mắt dịch vụ chăm sóc cây trọn gói, giúp khách hàng duy trì vẻ đẹp cho cây cảnh của mình.",
      date: new Date("2023-05-28T11:45:00"), // Thêm thời gian
      icon: faSeedling
    }
  ];

  return (
    <div className="profile__update-shop">
      <h3 className="mb-4">Cập nhật mới nhất từ GreenScape</h3>
      {updates.map((update) => (
        <div key={update.id} className="update-item mb-4 p-3" style={{border: '1px solid #e0e0e0', borderRadius: '8px'}}>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={update.icon} className="me-2" style={{color: '#28a745'}} />
            <h5 className="mb-0">{update.title}</h5>
          </div>
          <p className="mb-2">{update.description}</p>
          <small className="text-muted">
            {update.date.toLocaleDateString()} - {update.date.toLocaleTimeString()} {/* Hiển thị ngày và giờ */}
          </small>
        </div>
      ))}
    </div>
  );
};

export default ProfileUpdateShop;