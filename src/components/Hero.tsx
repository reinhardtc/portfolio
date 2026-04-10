export default function Hero() {
  return (
    //hero section
    <div className="hero-container grid grid-cols-2">
      <div className="hero-left flex flex-col justify-center content-start py-32 px-16 border-r border-(--grey-olive)">
        <p className="hero-eyebrow">Hello world</p>
        <h1 className="hero-name font-syne font-extrabold text-6xl">
          <span className="text-(--evergreen)">Colin</span>
          <br />
          <span className="text-(--chocolate-rust)">Reinhardt</span>
        </h1>
        <p className="hero-sub-heading"></p>
        <div className="hero-cta-links flex gap-4 justify-start">
          <a
            href="#work"
            className="cta-itme bg-(--evergreen) text-(--parchment) py-[.84rem] px-8 border-(--evergreen) border hover:bg-(--dusty-olive)"
          >
            VIEW WORK
          </a>
          <a
            href="#about"
            className="cta-item py-[.84rem] px-8 border-(--evergreen) border text-(--evergreen)"
          >
            ABOUT ME
          </a>
        </div>
      </div>
      <div className="hero-right flex flex-col py-32 px-16">
        <div className=" w-50 h-50 roumded-full"></div>
        <div className="skills grid">
          <div className="skill-item">skill 1</div>
          <div className="skill-item">skil 2</div>
          <div className="skill-item">skill 3</div>
          <div className="skill-item">skill 4</div>
        </div>
      </div>
    </div>
  );
}
