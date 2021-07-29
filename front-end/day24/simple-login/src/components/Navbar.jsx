import { Link } from "react-router-dom";
export default function Navbar() {
  const styles = {
    nav: "font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-evenly py-4 px-6 bg-white shadow sm:items-baseline w-full",
    link: "text-blue-500 hover:text-blue-800",
  };
  return (
    <nav class={styles.nav}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/about">
        About
      </Link>
      <Link className={styles.link} to="/profile">
        Profile
      </Link>
      <Link className={styles.link} to="/dashboard">
        Dashboard
      </Link>
    </nav>
  );
}
