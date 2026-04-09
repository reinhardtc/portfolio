export default function Nav() {
  return (
    <nav className="w-full flex py-6 px-16 justify-between border-b border-b-(--grey-olive)">
      <a href="#" className="nav-name-tag font-syne text-(--walnut) font-bold">
        Colin R.
      </a>
      <ul className="nav-links flex gap-10">
        <li className="nav-link-item ">
          <a href="#about" className="font-dm-sans">
            ABOUT
          </a>
        </li>
        <li className="nav-link-item ">
          <a href="#work" className="font-dm-sans">
            WORK
          </a>
        </li>
        <li className="nav-link-item ">
          <a href="#contact" className="font-dm-sans">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
