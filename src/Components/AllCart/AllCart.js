import React from 'react';
import Cart from "../Cart/Cart";

const AllCart = ({ trainings,handleCartTime }) => {

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-8">
        Select today’s exercise
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {trainings.map((trainingCartData) => (
          <Cart
            key={trainingCartData.id}
            trainingCartData={trainingCartData}
            handleCartTime={handleCartTime}
          ></Cart>
        ))}
      </div>
    </div>
  );
};
export default AllCart;



