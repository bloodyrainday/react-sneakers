import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./Card/Card.module.scss";

const Skeleton = (props) => (
  <div className={`content__sneakers-card ${styles.card}`}>
    <ContentLoader
      speed={2}
      width={210}
      height={260}
      viewBox="0 0 210 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="30" y="36" rx="10" ry="10" width="150" height="91" />
      <rect x="30" y="143" rx="3" ry="3" width="150" height="15" />
      <rect x="30" y="162" rx="3" ry="3" width="93" height="15" />
      <rect x="30" y="199" rx="8" ry="8" width="80" height="24" />
      <rect x="150" y="192" rx="8" ry="8" width="32" height="32" />
    </ContentLoader>
  </div>
);

export default Skeleton;
