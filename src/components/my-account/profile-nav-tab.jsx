import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faPercent } from '@fortawesome/free-solid-svg-icons';

function SingleNav({ active = false, id, title, icon }) {
  return (
    <button
      className={`nav-link w-100 text-start ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#nav-${id}`}
      type="button"
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={active ? "true" : "false"}
    >
      <span className="me-2">
        <FontAwesomeIcon icon={icon} />
      </span>
      {title}
    </button>
  );
}

const ProfileNavTab = () => {
  return (
    <nav>
      <div className="nav nav-tabs tp-tab-menu" id="nav-tab" role="tablist">
        <SingleNav
          active={true}
          id="profile"
          title="Hồ sơ"
          icon="fa-regular fa-user-pen"
        />
        <SingleNav
          id="bank"
          title="Ngân hàng"
          icon="fa-solid fa-building-columns"
        />
        <SingleNav
          id="address"
          title="Địa chỉ"
          icon="fa-solid fa-location-dot"
        />
        <SingleNav
          id="information"
          title="Đơn mua"
          icon="fa-regular fa-circle-info"
        />
        <SingleNav
          id="order"
          title="Chi tiết đơn mua"
          icon="fa-light fa-clipboard-list-check"
        />
        <SingleNav
          id="password"
          title="Đổi mật khẩu"
          icon="fa-regular fa-lock"
        />
        <SingleNav
          id="update-shop"
          title="Cập nhật Shop"
          icon="fa-regular fa-store"
        />
        <SingleNav
          id="voucher"
          title="Khuyến mãi"
          icon="fa-tag"
        />
        <SingleNav
          id="point"
          title="Điểm Tích Lũy"
          icon="fa-star" // Hoặc sử dụng FontAwesomeIcon nếu cần
        />
      </div>
    </nav>
  );
};

export default ProfileNavTab;
