(() => {
  let s, couleurs, x, linesWidth;

  async function init() {
    s = O_currentsection;
    var couleurs = ["red", "black", "white"];
    x = 0;
  }

  function draw() {
    // Move to the section
    push();
    translate(s.x, s.y);
    if (O_counter % O_sectionduration >= 1) {
      //line(s.x1, s.y1, O_sectionwidth, O_sectionheight);
    }
    for (let i = 0; i < 100; i++) {
      stroke("white"); // Couleur blanche
      line(s.x1, s.y1, s.x1 + i * 10, O_sectionheight);
    }
    // fill(0, 0, 100); noStroke
    //rect(0,0,O_sectionwidth,O_sectionheught)

    // O_counter % O_sectionduration == 120; Math.floor
    //consol.log(O_sectionduration)

    // Pop out of the section
    pop();
  }

  // Use the name of the current js file (without the extension) as the key in the object window.
  window.exquisitetaha33 = { init, draw };
})();
