//["⌐◨–◨"]

interface Particle {
  element: HTMLSpanElement;
  size: number;
  speedHorz: number;
  speedUp: number;
  spinVal: number;
  spinSpeed: number;
  top: number;
  left: number;
  direction: number;
}

const validateEventPosition = (
  mouseX: number,
  mouseY: number,
  rect?: DOMRect
) => {
  if (!rect) return;
  return (
    mouseX > rect.x &&
    mouseX < rect.x + rect.width &&
    mouseY > rect.y &&
    mouseY < rect.y + rect.height
  );
};

const Glasses = {
  lostNouns: [
    '<img src="https://heads.mfers.dev/0.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/1.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/2.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/3.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/4.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/5.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/6.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/7.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/8.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/9.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/10.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/11.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/12.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/13.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/14.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/15.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/16.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/17.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/18.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/19.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/20.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/21.png" width="150px" height="150px">',
  ],
  lilNouns: [
    '<img src="https://heads.mfers.dev/22.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/23.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/24.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/25.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/26.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/27.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/28.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/29.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/30.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/31.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/32.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/33.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/34.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/35.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/36.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/37.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/38.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/39.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/40.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/41.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/42.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/43.png" width="150px" height="150px">',
  ],
  nouns: [
    '<img src="https://heads.mfers.dev/44.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/45.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/46.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/47.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/48.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/49.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/50.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/51.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/52.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/53.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/54.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/55.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/56.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/57.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/58.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/59.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/60.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/61.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/62.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/63.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/64.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/65.png" width="150px" height="150px">',
  ],
  mixed: [
    '<img src="https://heads.mfers.dev/66.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/67.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/68.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/69.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/70.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/71.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/72.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/73.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/74.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/75.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/76.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/77.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/78.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/79.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/80.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/81.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/82.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/83.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/84.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/85.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/86.png" width="150px" height="150px">',
    '<img src="https://heads.mfers.dev/87.png" width="150px" height="150px">',
  ],
  //add more glasses here
};

class Fountain {
  buttonId: string;
  limit: number;
  particles: Particle[];
  autoAddParticle: boolean;
  height: number;
  sizes: number[];
  variants: string[];
  mouseX: number;
  mouseY: number;
  rect?: DOMRect;

  constructor(props: { buttonId: string }) {
    this.buttonId = props.buttonId;
    this.limit = 7;
    this.particles = [];
    this.autoAddParticle = false;
    this.height = document.documentElement.clientHeight;
    this.sizes = [15, 20, 25, 35, 45];
    this.mouseX = 0;
    this.mouseY = 0;
    // ["⌐◨–◨"]
    this.variants = Glasses.mixed;
    this.addHandlers();
    this.loop();
    this.rect = document
      ?.getElementById(props.buttonId)
      ?.getBoundingClientRect();
  }

  loop() {
    if (
      validateEventPosition(this.mouseX, this.mouseY, this.rect) &&
      this.autoAddParticle &&
      this.particles.length < this.limit
    ) {
      this.createParticle();
    }

    this.updateParticles();

    requestAnimationFrame(this.loop.bind(this));
  }

  addHandlers() {
    const isTouchInteraction =
      "ontouchstart" in window || navigator.maxTouchPoints;

    const tap = isTouchInteraction ? "touchstart" : "mousedown";
    const tapCancel = isTouchInteraction ? "touchcancel" : "contextmenu";
    const tapEnd = isTouchInteraction ? "touchend" : "mouseup";
    const move = isTouchInteraction ? "touchmove" : "mousemove";

    document?.getElementById(this.buttonId)?.addEventListener(
      move,
      (e) => {
        this.mouseX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
        this.mouseY = e instanceof MouseEvent ? e.pageY : e.touches[0].pageY;
      },
      { passive: false }
    );

    document
      ?.getElementById(this.buttonId)
      ?.addEventListener(tap, (e: MouseEvent | TouchEvent) => {
        this.mouseX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
        this.mouseY = e instanceof MouseEvent ? e.pageY : e.touches[0].pageY;
        this.autoAddParticle = true;
      });

    document.addEventListener(tapCancel, () => {
      this.autoAddParticle = false;
    });

    document.addEventListener(tapEnd, () => {
      this.autoAddParticle = false;
    });

    document.addEventListener("mouseleave", () => {
      this.autoAddParticle = false;
    });
  }

  createParticle() {
    const size = this.sizes[Math.floor(Math.random() * this.sizes.length)];
    const speedHorz = Math.random() * 7;
    const speedUp = Math.random() * 25;
    const spinVal = Math.random() * 360;
    const spinSpeed = Math.random() * 25 * (Math.random() <= 0.5 ? -1 : 1);
    const top = this.mouseY - size;
    const left = this.mouseX - size;
    const direction = Math.random() <= 0.5 ? -1 : 1;

    const particle = document.createElement("span");
    particle.innerHTML =
      this.variants[Math.floor(Math.random() * this.variants.length)];
    particle.classList.add("particle");

    particle.setAttribute(
      "style",
      `
      -webkit-user-select: none;
      font-size: ${size}px;
      left: ${left}px;
      pointer-events: none;
      position: fixed;
      top: ${top}px;
      overflow: hidden;
      transform: rotate(${spinVal}deg);
    `
    );

    document?.documentElement?.appendChild(particle);

    this.particles.push({
      direction,
      element: particle,
      left,
      size,
      speedHorz,
      speedUp,
      spinSpeed,
      spinVal,
      top,
    });
  }

  updateParticles() {
    this.particles.forEach((p) => {
      p.left = p.left - p.speedHorz * p.direction;
      p.top = p.top - p.speedUp;
      p.speedUp = Math.min(p.size, p.speedUp - 1);
      p.spinVal = p.spinVal + p.spinSpeed;

      if (p.top > this.height - p.size) {
        this.particles = this.particles.filter((o) => o !== p);
        p.element.remove();
      }

      p.element.setAttribute(
        "style",
        `
        -webkit-user-select: none;
        font-size: ${p.size}px;
        left: ${p.left}px;
        pointer-events: none;
        position: fixed;
        top: ${p.top}px;
        transform: rotate(${p.spinVal}deg);
      `
      );
    });
  }
}

export default Fountain;
