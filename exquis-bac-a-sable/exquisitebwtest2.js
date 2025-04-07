(() => {
  let s, r, rinc, beta;
  let RADIUS;

  async function init() {
    s = O_currentsection;
    let radius_tmp = O_sectionheight / 2;
    RADIUS = radius_tmp - radius_tmp / 3;
    beta = 0;
  }

  function draw() {
    if (O_counter % O_sectionduration > 1) {
      return;
    }

    // Move to the section
    push();
    translate(s.x, s.y);

    //fill(0, 0, 100);
    fill(10, 70, 0, beta);
    noStroke();
    rect(0, 0, O_sectionwidth, O_sectionheight);

    /*
    for (let i = 200; i <= 400; i += 10) {
      blob(0, O_sectionwidth / 2 - RADIUS / 4, O_sectionheight / 2);
    }
    */
    for (let i = 200; i <= 400; i += 10) {
      blob(
        230,
        O_sectionwidth / 2 + RADIUS / 4 - 0.5 * i,
        O_sectionheight / 2 + 0.005 * 0.5 * i
      );
    }

    for (let i = 200; i <= 400; i += 10) {
      blob(
        230,
        O_sectionwidth / 4 + RADIUS / 4 - 0.5 * i,
        O_sectionheight / 4 + 0.005 * 0.5 * i
      );
    }
    beta += 0.5;

    // Pop out of the section
    pop();
  }

  function blob(h, x1, y1) {
    noStroke();

    for (let i = 0; i < 10; i++) {
      let rs = random(2.0) - 1.0;
      fill((h + 4 * rs + 360) % 360, 80, 80, 2.5); // on garde les teintes dans [0, 360]

      beginShape();

      for (let a = 0; a <= 360; a += 10) {
        let angle = radians(a);
        let r = RADIUS + (RADIUS / 3) * (noise(4 * rs + a) * 2 - 1);
        let x = (r / 3) * cos(angle);
        let y = (r / 3) * sin(angle);
        vertex(x1 + x, y1 + y);
      }

      endShape(CLOSE);
    }
  }

  // Use the name of the current js file (without the extension) as the key in the object window.
  window.exquisitebwtest2 = { init, draw };
})();
