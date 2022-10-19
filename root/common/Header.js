import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/Login">
        <a>Login</a>
      </Link>
    </header>
  );
}
