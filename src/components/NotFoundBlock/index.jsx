import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  console.log(styles);

  return (
    <div className={styles.root}>
      <h1>
        <span>Ничего не найдено :(</span>
      </h1>
      <p className={styles.description}>
        К сожалению, данная страница отсутсвует в нашем Pizza-Store
      </p>
    </div>
  );
};

export default NotFoundBlock;
