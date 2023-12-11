import React from "react";
import avatar from "../../assets/default.png"

/**
 * passing default value if it does not exist
 * and using optional chaining if some value exist
 */

export function Person({ name, nickName = "myNickName", images }) {

  const img = images?.[0]?.small?.url || avatar;
  // const img = images?.[0]?.small?.url ?? avatar;

  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px"}} />
      <h3>{name}</h3>
      <p>Nickname: {nickName}</p>
    </div>
  );
}
