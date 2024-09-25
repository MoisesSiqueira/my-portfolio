import Image from "next/image";

import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Ola, eu sou Moisés Siqueira! 👋</h1>
        <h2>Engenheiro de Software</h2>
      </div>
      <Image
        src="/me.jpg"
        alt="Vercel Logo"
        width={250}
        height={220}
        priority
      />
    </div>
  );
}
