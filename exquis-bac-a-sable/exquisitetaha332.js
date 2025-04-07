(() => {
  let s, couleurs, x, linesWidth, centerx, centery, t;

  async function init() {
    s = O_currentsection;
    var couleurs = ["red", "black", "white"];
    x = 0;
    t = 0;
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

      line(s.x1, s.y1, s.x1 + i * 10, O_sectionheight / 10);
    }

    for (let i = 0; i < 10; i++) {
      stroke("white"); // Couleur blanche
      line(s.x2, s.y2, O_sectionwidth - 50, O_sectionheight / 10 - 10 * i); // ne pas oublier la condition pour que ça ne dépasse pas
    }

    //strokeWeight(10 + 0.1 * t);
    /*
    line(s.x2, s.y2, s.x4, s.y4);
    line(s.x1, s.y1, s.x3, s.y3);
    centerx = (s.x1 + s.x3) / 2;
    centery = (s.y1 + s.y3) / 2;
    circle(centerx, centery, 25);
    t++;
    */

    // fill(0, 0, 100); noStroke
    //rect(0,0,O_sectionwidth,O_sectionheught)

    // O_counter % O_sectionduration == 120; Math.floor
    //consol.log(O_sectionduration)

    // Pop out of the section
    pop();
  }

  // Use the name of the current js file (without the extension) as the key in the object window.
  window.exquisitetaha332 = { init, draw };
})();
