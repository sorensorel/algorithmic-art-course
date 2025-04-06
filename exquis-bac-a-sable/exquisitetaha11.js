(() => {
  let s, x;

  async function init() {
    s = O_currentsection;
    x = 0;
  }

  function draw() {
    let r = random();

    // Move to the section
    push();
    translate(s.x, s.y);

    fill("red");
    quad(
      s.x1,
      s.y1,
      s.x1 + 10,
      s.y1,
      s.x1 + 20 + x,
      O_sectionheight,
      s.x1 + 10 + x,
      O_sectionheight
    );
    x += 1;

    // Pop out of the section
    pop();
  }

  // Use the name of the current js file (without the extension) as the key in the object window.
  window.exquisitetaha11 = { init, draw };
})();
