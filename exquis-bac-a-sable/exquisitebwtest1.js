(() => {
  let s, r, rinc;

  async function init() {
    s = O_currentsection;
    r = 7;
    rinc = 0.5;
  }

  function draw() {
    // Move to the section
    push();
    translate(s.x, s.y);

    // Create border around section
    fill(0, 0, 0);
    rect(0, 0, O_sectionwidth, O_sectionheight);
    fill(0, 0, 100);
    noStroke();

    // Draw our art

  
 

    // Pop out of the section
    pop();
  }
  function blob(h, x1, y1) {
    noStroke();

    for (let i = 0; i < 10; i++) {
      let rs = random(2.0) - 1.0;
      fill((h + 4 * rs + 360) % 360, 80, 80, 0.01); // on garde les teintes dans [0, 360]

      beginShape();

      for (let a = 0; a <= 360; a += 10) {
        let angle = radians(a);
        let r = 150 + 50 * (noise(4 * rs + a) * 2 - 1);
        let x = r * cos(angle);
        let y = r * sin(angle);
        vertex(x1 + x, y1 + y);
      }

      endShape(CLOSE);
    }
  }


  // Use the name of the current js file (without the extension) as the key in the object window.
  window.exquisitebwtest1 = { init, draw };
})();
