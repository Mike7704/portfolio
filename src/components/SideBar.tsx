import Link from "next/link";
import Image from "next/image";
import "boxicons/css/boxicons.min.css";
import "@/styles/sidebar.css";

export default function SideBar() {
  return (
    <div className="nav-sidebar">
      <div className="profile-header">
        <Image className="profile-pic" src={"/images/profile-pic.png"} width={256} height={256} alt="profile image" />
        <h2 className="profile-name">Michael Cowley</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="#home">
              <i className="bx bx-home"></i>Home
            </Link>
          </li>
          <li>
            <Link href="#about">
              <i className="bx bx-user"></i>About
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <i className="bx bx-code-alt"></i>Projects
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <i className="bx bx-envelope"></i>Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
