import {memo} from "react";

import styles from "./Header.module.scss";
import Cloud from "/src/shared/assets/cloud.svg";

interface HeaderProps {
    className?: string
}

export const Header = memo((props: HeaderProps) => {

    return (
        <div className={styles.Header}>
            <img src={Cloud} alt="" height="75px"/>
            <h1>CloudVite</h1>
        </div>
    );
});