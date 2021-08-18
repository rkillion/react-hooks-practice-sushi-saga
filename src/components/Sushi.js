import React from "react";

function Sushi({ roll }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {roll.eaten ? null : (
          <img
            src={roll.img_url}
            alt={roll.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {roll.name} - ${roll.price}
      </h4>
    </div>
  );
}

export default Sushi;
