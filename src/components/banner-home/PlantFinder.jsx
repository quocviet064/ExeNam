import React from "react";

const PlantFinder = () => {
  return (
    <div className="bg-blue-100 p-4 flex items-center">
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-2">
          Sử dụng công cụ tìm cây của chúng tôi!
        </h2>
        <p>
          Bạn đang gặp khó khăn trong việc quyết định? Chúng tôi sẽ hướng dẫn
          bạn qua 5 bước đơn giản!
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="https://placehold.co/150x150"
          alt="Person holding a plant"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default PlantFinder;
