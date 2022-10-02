import React from 'react';

const Cart = ({ trainingCartData, handleCartTime }) => {
  const { name, picture, age, time, details } = trainingCartData;
  return (
    <div>
    <div className="card bg-slate-100 shadow h-full">
      <figure className="px-5 pt-5">
        <img src={picture} alt="Shoes" className="rounded-xl w-full h-50" />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">{name}</h2>
        <p>{details.slice(0, 80)}...</p>
        <p className="font-medium text-slate-600">
          For Age : <strong>{age}</strong>
        </p>
        <p className="font-medium text-slate-600">
          Time required : <strong>{time}s</strong>
        </p>
        <div className="card-actions">
          <button onClick={()=>handleCartTime(time)} className="btn btn-active bg-blue-400 w-full mt-4 py-2">Add to list</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cart;