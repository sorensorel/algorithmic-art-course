(() => {
  let s, r, rinc, beta, b;
  let RADIUS;

  async function init() {
    s = O_currentsection;
    beta = 0;
    b = 0;
  }

  function draw() {
    /*
    if (O_counter % O_sectionduration > 1) {
      return;
    }
    */
    // Move to the section
    push();
    translate(s.x, s.y);

    //fill(0, 0 + beta * 10, 100, 200);
    fill(180, 30, 50, beta % 250);
    noStroke();
    rect(0, 0, O_sectionwidth, O_sectionheight);
    beta += (O_sectionwidth / O_sectionduration) * 0.7;
    console.log(O_sectionduration);

    stroke("white"); // Couleur blanche
    strokeWeight(2);
    r = 20;
    noFill();
    bezier(
      s.x1,
      s.y1,
      O_sectionwidth / 4,
      O_sectionheight / 4,
      O_sectionwidth / 4,
      O_sectionheight / 4,
      (O_sectionwidth / 2 + b) % O_sectionwidth,
      O_sectionheight / 2
    );
    bezier(
      s.x3,
      s.y3,
      (3 * O_sectionwidth) / 4,
      (3 * O_sectionheight) / 4,
      (3 * O_sectionwidth) / 4,
      (3 * O_sectionheight) / 4,
      (O_sectionwidth / 2 + b) % O_sectionwidth,
      O_sectionheight / 2
    );
    bezier(
      s.x2,
      s.y2,
      (3 * O_sectionwidth) / 4,
      (3 * O_sectionheight) / 4,
      (3 * O_sectionwidth) / 4,
      (3 * O_sectionheight) / 4,
      (O_sectionwidth / 2 + b) % O_sectionwidth,
      O_sectionheight / 2
    );
    bezier(
      s.x4,
      s.y4,
      (3 * O_sectionwidth) / 4,
      (3 * O_sectionheight) / 4,
      (3 * O_sectionwidth) / 4,
      (3 * O_sectionheight) / 4,
      (O_sectionwidth / 2 + b) % O_sectionwidth,
      O_sectionheight / 2
    );
    b += (O_sectionwidth / O_sectionduration)*0.7;

    // Pop out of the section
    pop();
  }

  // Use the name of the current js file (without the extension) as the key in the object window.
  window.exquisitecolortest = { init, draw };
})();
