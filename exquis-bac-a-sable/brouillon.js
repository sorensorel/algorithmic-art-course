function draw() {
  // Move to the section
  push();
  translate(s.x, s.y);
  if (O_counter % O_sectionduration >= 1) {
    line(s.x1, s.y1, s.x2, s.y2);
  }
  if (O_counter % O_sectionduration >= O_sectionduration / 4) {
    line(s.x2, s.y2, s.x3, s.y3);
  }
  if (O_counter % O_sectionduration == O_sectionduration / 2) {
    line(s.x3, s.y3, s.x4, s.y4);
  }
  if (O_counter % O_sectionduration == (3 * O_sectionduration) / 4) {
    line(s.x4, s.y4, s.x1, s.y1);
  }

  // O_counter % O_sectionduration == 120; Math.floor
  //consol.log(O_sectionduration)

  // Pop out of the section
  pop();
}



(() => {
  let s, q1, q2;

  class Quadri {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4, color) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
      this.x4 = x4;
      this.y4 = y4;
      this.quadColor = color;
      this.speed = 1; // Adjust for faster/slower movement
      this.direction = 1; // 1 = moving down, -1 = moving up
    }

    update(a) {
      // Move bottom points up and down
      this.x3 += this.speed * this.direction * a;
      this.x4 += this.speed * this.direction * a;

      // Reverse direction at a certain range

      if (this.y3 >= O_sectionheight + 20 || this.y3 <= O_sectionheight - 20) {
        this.direction *= -1;
      }
    }

    display() {
      fill(this.quadColor);
      stroke(0);
      quad(
        this.x1,
        this.y1,
        this.x2,
        this.y2,
        this.x3,
        this.y3,
        this.x4,
        this.y4
      );
    }
  }

  async function init() {
    s = O_currentsection;

    if (s) {
      q1 = new Quadri(
        s.x1,
        s.y1,
        s.x1 + 10,
        s.y1,
        s.x1 + 20,
        O_sectionheight,
        s.x1 + 10,
        O_sectionheight,
        "red"
      );
      q2 = new Quadri(
        s.x2,
        s.y2,
        s.x2,
        s.y2 + 15,
        s.x1 + 20,
        O_sectionheight,
        s.x1 + 10,
        O_sectionheight,
        "white"
      );
    }
  }

  function draw() {
    if (!s || !q1) return;

    push();
    translate(s.x, s.y);

    //q1.update(); // Update the position of the bottom half
    //q1.display();

    let step = O_counter % O_sectionduration;
    if (step === 1) {
      q1.update(1); // Update the position of the bottom half
      q1.display();
    }
    if (step >= O_sectionduration / 4) {
      q2.update(-1); // Update the position of the bottom half
      q2.display();
    }

    if (step === O_sectionduration / 2) {
      line(s.x3, s.y3, s.x4, s.y4);
    }
    if (step === (3 * O_sectionduration) / 4) {
      line(s.x4, s.y4, s.x1, s.y1);
    }

    pop();
  }

  window.exquisitetaha1 = { init, draw };
})();
