(() => {
  let s, couleurs, x, linesWidth;
  let mps;

  async function init() {
    s = O_currentsection;
    var couleurs = ["red", "black", "white"];
    mps = [
      { x: s.x1, y: s.y1 },
      { x: s.x2, y: s.y2 },
      { x: s.x3, y: s.y3 },
      { x: s.x4, y: s.y4 },
    ];
    x = 0;
  }

  function draw() {
    // Move to the section
    push();
    translate(s.x, s.y);
    for (let mp_i = 0; mp_i < mps.length; mp_i++) {
      for (let mp_j = mp_i + 1; mp_j < mps.length; mp_j++) {
        let sign_x = random() < 0.5 ? 1 : -1;
        let sign_y = random() < 0.5 ? 1 : -1;
        for (let i = 0; i < 20; i++) {
          stroke("#00F0FF02"); // Couleur blanche
          //line(s.x1, s.y1, s.x1 + i * 10, O_sectionheight);
          noFill();
          let noise_scale = 10;
          let cx = constrain(
            O_sectionwidth / 2 +
              sign_x * i * 10 +
              noise(O_counter) * noise_scale,
            1,
            O_sectionwidth - 1
          );
          let cy = constrain(
            O_sectionheight / 2 +
              sign_y * i * 10 +
              noise(O_counter) * noise_scale,
            1,
            O_sectionheight
          );

          bezier(
            mps[mp_i].x,
            mps[mp_i].y,
            cx,
            cy,
            cx,
            cy,
            mps[mp_j].x,
            mps[mp_j].y
          );
        }
      }
    }
    // fill(0, 0, 100); noStroke
    //rect(0,0,O_sectionwidth,O_sectionheught)

    // O_counter % O_sectionduration == 120; Math.floor
    //consol.log(O_sectionduration)

    // Pop out of the section
    pop();
  }

  // Use the name of the current js file (without the extension) as the key in the object window.
  window.exquisitetahaBez = { init, draw };
})();
