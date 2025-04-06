(() => {
  let s, couleurs, x, linesWidth;

  async function init() {
    s = O_currentsection;
    var couleurs = ["red", "black", "white"];
    x = 0;
  }

  function draw() {
    //background("white");

    // Move to the section
    push();
    translate(s.x, s.y);

    // Draw our art

    linesWidth = random([0.5, 1, 2, 3, 4.5, 6]);
    strokeWeight(linesWidth);
    var couleur = random(couleurs);
    stroke(couleur);
    line(s.x1, s.y1, 0 + x, O_sectionheight);
    console.log(s.x1, s.y1);
    x += 0.1;

    // Pop out of the section
    pop();
  }

  // Use the name of the current js file (without the extension) as the key in the object window.
  window.exquisitetaha22 = { init, draw };
})();
