import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div class="head">
        <a href="">
          <Image src="./img/logo.svg" width={200} height={200} alt="logo" className="logo" />
        </a>
        <button id="btn-mobile">☰</button>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Section 1</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Section 2</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Section 3</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Section 4</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
