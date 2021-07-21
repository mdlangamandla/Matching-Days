describe("The Matching-Days factory functions", ()=>{
 
  it("Should be able to determine that 25 June 2021 was on a friday.", ()=> {
    var testingDays = matchingDays();
    testingDays.setDate2("2021-06-25");
    assert.equal(testingDays.getDay2(), "friday");
  });
  it("Should be able to indicate/show that 28 February 2015 and 29 July 1995 fell on the same day of the week.", ()=> {
    var testingDays = matchingDays();
    testingDays.setDate1("2015-02-28");
    testingDays.setDate2("1995-07-29");
    assert.equal(testingDays.sameDayCheck(), true);
  });
  it("Should be able to indicate/show that 11 June 2010 and 27 April 1994 did not fall on the same day of the week.",()=> {
    var testingDays = matchingDays();
    testingDays.setDate1("2003-06-26");
    testingDays.setDate2("1991-02-03");
    assert.equal(testingDays.sameDayCheck(), false);
  });

  it("Should be able to determine/show that 08 April 1992 was on a Tuesday.", ()=>{
    var testingDays = matchingDays();
    testingDays.setDate1("1994-05-23");
    assert.equal(testingDays.getDay1(), "monday");
  });
});
