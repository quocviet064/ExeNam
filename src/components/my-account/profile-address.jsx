import React from 'react';

const Address = () => {
  const address = {
    name: 'Nguyễn Văn A',
    street: '123 Đường ABC',
    ward: 'Phường XYZ',
    district: 'Quận 1',
    city: 'TP. Hồ Chí Minh',
    phone: '0123456789',
    isDefault: true
  };

  return (
    <div className="address-page">
      <h2 className="mb-4">Địa chỉ của tôi</h2>
      <div className="card w-100"> {/* Thêm class w-100 */}
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="card-title">Địa chỉ nhà</h5>
              <p className="card-text">
                <strong>{address.name}</strong><br />
                {address.street}<br />
                {address.ward}, {address.district}<br />
                {address.city}<br />
                Điện thoại: {address.phone}
              </p>
              {address.isDefault && (
                <span className="badge bg-success">Mặc định</span>
              )}
            </div>
            <div className="d-flex flex-column">
              <button className="btn btn-primary mb-2">Cập nhật</button>
              {!address.isDefault && (
                <button className="btn btn-outline-success">Thiết lập mặc định</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;