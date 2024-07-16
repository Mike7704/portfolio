import Link from "next/link";

export default function SideBar() {
  return (
    <div className="nav-sidebar">
      <h2 className="title-name">Michael Cowley</h2>
      <nav>
        <ul>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
