$(function () {
  const { test } = QUnit;
  let tomb = [];
  const infoPanel = new InfoView();
/*   let tesztController = new TTTController();
  let jatekter = new JatekterView(tomb, $("article"));
  let infoPanel = new InfoView(); */

  QUnit.module("grafikus Teszt", function (h) {
    h.before(() => {
      tomb = [];
      const tesztController = new TTTController();
      const jatekter = new JatekterView(tomb, $("#qunit-fixture"));
      const infoPanel = new InfoView();
    });
    test("letezik-e", function (assert) {
      for (let index = 0; index < 9; index++) {
        assert.ok(tomb[index].Elem, "letezik");
        assert.ok(tomb[index].pElem, "letezik");
      }
    });
    test("gombra katintva beleirodik X,vagy O", function (assert) {
        console.log(tomb);
      for (let index = 0; index < 9; index++) {
        tomb[index].Elem.click();
        if (index % 2 == 0) {
          assert.equal(tomb[index].aktiv, false);
          assert.equal(tomb[index].pElem.html(), "X");
          assert.equal(tomb[index].ertek, "X");
        } else {
          assert.equal(tomb[index].aktiv, false);
          assert.equal(tomb[index].pElem.html(), "O");
          assert.equal(tomb[index].ertek, "O");
        }
      }
    });
    
  });
  QUnit.module("grafikus Teszt", function (h) {

    h.before(() => {
      tomb = [];
      //const tesztController = new TTTController();
      const jatekter = new JatekterView(tomb, $("#qunit-fixture"));
      
    });
  test("aktiv infopanel kiirás", function (assert) {
    for (let index = 0; index < 9; index++) {
        tomb[index].Elem.click();
        if (index % 2 == 0) {
            assert.equal(infoPanel.getXjatekos()+" következik","Xman következik");          
        } else {
            assert.equal(infoPanel.getOjatekos()+" következik","Oman következik"); 
        }
      }
    });
});
});
