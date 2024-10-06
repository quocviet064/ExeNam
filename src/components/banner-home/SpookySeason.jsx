import React from "react";

const SpookySeason = () => {
  return (
    <div className="bg-orange-100 p-4 flex items-center">
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-2">Mùa ma quái đã đến!</h2>
        <p>
          Trang trí những hành lang linh thiêng với những người bạn đáng sợ nhất
          của chúng ta. Chuẩn bị cho mùa thu.
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="https://placehold.co/150x150"
          alt="Person holding a spooky plant"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default SpookySeason;
