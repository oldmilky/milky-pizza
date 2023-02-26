import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader = (props) => (
  <ContentLoader
    speed={2}
    width={350}
    height={500}
    viewBox="0 0 350 500"
    backgroundColor="#FFECBA"
    foregroundColor="#FFE49E"
    {...props}
  >
    <circle cx="164" cy="152" r="150" />
    <rect x="34" y="319" rx="4" ry="4" width="250" height="31" />
    <rect x="167" y="567" rx="4" ry="4" width="150" height="50" />
    <rect x="419" y="573" rx="4" ry="4" width="55" height="36" />
    <rect x="11" y="370" rx="0" ry="0" width="315" height="120" />
  </ContentLoader>
);

export default SkeletonLoader;
