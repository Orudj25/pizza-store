import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="414" rx="11" ry="11" width="95" height="30" />
    <rect x="126" y="413" rx="27" ry="27" width="152" height="45" />
    <circle cx="135" cy="135" r="123" />
    <rect x="-1" y="272" rx="11" ry="11" width="280" height="19" />
    <rect x="0" y="311" rx="11" ry="11" width="280" height="88" />
  </ContentLoader>
);

export default Skeleton;
