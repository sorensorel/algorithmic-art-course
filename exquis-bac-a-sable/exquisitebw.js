(() => {
  let s, r, rinc;
  let RADIUS;

  async function init() {
    s = O_currentsection;
    let radius_tmp = O_sectionheight / 2;
    RADIUS = radius_tmp - radius_tmp / 3;
  }

  function draw() {
    if (O_counter % O_sectionduration > 1) {
      return;
    }

    // Move to the section
    push();
    translate(s.x, s.y);

    fill(0, 0, 100);
    noStroke();
    rect(0, 0, O_sectionwidth, O_sectionheight);

    for (let i = 200; i <= 400; i += 10) {
      blob(0, O_sectionwidth / 2 - RADIUS / 4, O_sectionheight / 2);
    }
    for (let i = 200; i <= 400; i += 10) {
      blob(230, O_sectionwidth / 2 + RADIUS / 4, O_sectionheight / 2);
    }

    // Pop out of the section
    pop();
  }

  function blob(h, x1, y1) {
    noStroke();

    for (let i = 0; i < 10; i++) {
      let rs = random(2.0) - 1.0;
      fill((h + 4 * rs + 360) % 360, 80, 80, 2.5); // on garde les teintes dans [0, 360]

      beginShape();

      for (let a = 0; a <= 180; a += 10) {
        let angle = radians(a);
        let r = RADIUS + (RADIUS / 3) * (noise(4 * rs + a) * 2 - 1);
        let x = r * cos(angle);
        let y = r * sin(angle);
        vertex(x1 + x, y1 + y);
      }

      endShape(CLOSE);
    }
  }

  // Use the name of the current js file (without the extension) as the key in the object window.
  window.exquisitebw = { init, draw };
})();
