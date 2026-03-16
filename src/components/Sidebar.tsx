import styles from "./Sidebar.module.css";

import { Avatar } from "./Avatar";
import avatarPhoto from "../assets/avatar.jpg";

import { FiEdit3 } from "react-icons/fi";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <Avatar src={avatarPhoto} />
        <strong>Arthur</strong>
        <p className="subtitle">Web Developer</p>
        <footer>
          <a href="#">
            <FiEdit3 />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
