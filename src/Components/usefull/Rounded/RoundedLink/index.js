import React from "react";

const RoundedLink = ({ href, target, children }) => {
  return (
    <a href={href} target={target}>
      <div class="roundedLink">{children}</div>
    </a>
  );
};
export default RoundedLink;
