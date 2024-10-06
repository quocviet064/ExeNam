import React from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as Yup from "yup";
// internal
import ErrorMsg from '../common/error-msg';
import { EmailTwo, LocationTwo, PhoneThree, UserThree } from '@/svg';
import { useUpdateProfileMutation } from '@/redux/features/auth/authApi';
import { notifyError, notifySuccess } from '@/utils/toast';
import Image from 'next/image';

// Inline styles
const radioGroupStyle = {
  display: 'flex',
  gap: '20px',
  marginTop: '10px',
};

const radioOptionStyle = {
  display: 'flex',
  alignItems: 'center',
};

const radioInputStyle = {
  marginRight: '5px',
};

const radioLabelStyle = {
  marginBottom: '0',
};

// yup schema
const schema = Yup.object().shape({
  username: Yup.string().required().label("Tên đăng nhập"),
  fullName: Yup.string().required().label("Họ và tên"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(10).label("Số điện thoại"),
  address: Yup.string().required().label("Địa chỉ"),
  gender: Yup.string().required().label("Giới tính"),
  birthDate: Yup.date().required().label("Ngày sinh"),
});

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.auth);
  const [updateProfile, {}] = useUpdateProfileMutation();
  
  // react hook form
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  // on submit
  const onSubmit = (data) => {
    updateProfile({
      id: user?._id,
      username: data.username,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      gender: data.gender,
      birthDate: data.birthDate,
    }).then((result) => {
      if (result?.error) {
        notifyError(result?.error?.data?.message);
      } else {
        notifySuccess(result?.data?.message);
      }
    });
    reset();
  };

  return (
    <div className="profile__info card mb-4">
      <div className="card-body">
        <h3 className="profile__info-title">Thông tin cá nhân</h3>
        <h4 className="mb-3">Welcome, {user?.fullName || "Người dùng"}!</h4> {/* Thêm thông báo chào mừng */}
        <div className="d-flex align-items-center mb-3">
          <div className="profile-user-image me-3">
            {user?.imageURL ? (
              <Image
                src={user.imageURL}
                alt="User Image"
                width={100}
                height={100}
                className="rounded-circle"
              />
            ) : user?.name ? (
              <h2 className="text-uppercase login_text">
                {user.name[0]}
              </h2>
            ) : (
              <UserThree />
            )}
          </div>
          <h4>{user?.fullName || "Người dùng"}</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-12">
              <div className="profile__input-box">
                <label>Tên đăng nhập</label>
                <div className="profile__input">
                  <input {...register("username")} name='username' type="text" placeholder="Nhập tên đăng nhập" defaultValue={user?.username} />
                  <span><UserThree /></span>
                  <ErrorMsg msg={errors.username?.message} />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="profile__input-box">
                <label>Họ và tên</label>
                <div className="profile__input">
                  <input {...register("fullName")} name='fullName' type="text" placeholder="Nhập họ và tên" defaultValue={user?.fullName} />
                  <span><UserThree /></span>
                  <ErrorMsg msg={errors.fullName?.message} />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="profile__input-box">
                <label>Email</label>
                <div className="profile__input">
                  <input {...register("email")} name='email' type="email" placeholder="Nhập email" defaultValue={user?.email} />
                  <span><EmailTwo /></span>
                  <ErrorMsg msg={errors.email?.message} />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="profile__input-box">
                <label>Số điện thoại</label>
                <div className="profile__input">
                  <input {...register("phone")} name='phone' type="text" placeholder="Nhập số điện thoại" defaultValue={user?.phone} />
                  <span><PhoneThree /></span>
                  <ErrorMsg msg={errors.phone?.message} />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="profile__input-box">
                <label>Địa chỉ</label>
                <div className="profile__input">
                  <input {...register("address")} name='address' type="text" placeholder="Nhập địa chỉ" defaultValue={user?.address} />
                  <span><LocationTwo /></span>
                  <ErrorMsg msg={errors.address?.message} />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="profile__input-box">
                <label>Giới tính</label>
                <div style={radioGroupStyle}>
                  <div style={radioOptionStyle}>
                    <input 
                      {...register("gender")} 
                      type="radio" 
                      id="male" 
                      value="male" 
                      defaultChecked={user?.gender === "male"}
                      style={radioInputStyle}
                    />
                    <label htmlFor="male" style={radioLabelStyle}>Nam</label>
                  </div>
                  <div style={radioOptionStyle}>
                    <input 
                      {...register("gender")} 
                      type="radio" 
                      id="female" 
                      value="female" 
                      defaultChecked={user?.gender === "female"}
                      style={radioInputStyle}
                    />
                    <label htmlFor="female" style={radioLabelStyle}>Nữ</label>
                  </div>
                  <div style={radioOptionStyle}>
                    <input 
                      {...register("gender")} 
                      type="radio" 
                      id="other" 
                      value="other" 
                      defaultChecked={user?.gender === "other"}
                      style={radioInputStyle}
                    />
                    <label htmlFor="other" style={radioLabelStyle}>Khác</label>
                  </div>
                </div>
                <ErrorMsg msg={errors.gender?.message} />
              </div>
            </div>

            <div className="col-12">
              <div className="profile__input-box">
                <label>Ngày sinh</label>
                <div className="profile__input">
                  <input {...register("birthDate")} name='birthDate' type="date" defaultValue={user?.birthDate} />
                  <ErrorMsg msg={errors.birthDate?.message} />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="profile__btn">
                <button type="submit" className="tp-btn">Cập nhật thông tin</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;