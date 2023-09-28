"use client";

const AddToCart = () => {
  return (
    <div>
      <button
        className="badge badge-info gap-2"
        onClick={() => console.log("added")}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
