function matchingDays() {
    let date1;
    let date2;
  
    function setDate1(strDate) {
      date1 = new Date(strDate);
    }
    function setDate2(strDate) {
      date2 = new Date(strDate);
    }
  
    function getDay1() {
      let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      return days[date1.getDay()];
    }
    function getDay2() {
      if (date2) {
        let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        return days[date2.getDay()];
      }
    }
  
    function sameDayCheck() {
      if ((date1 === undefined) | (date2 === undefined)) {
        return false;
      } else if (date1.getDay() === date2.getDay()) {
        return true;
      } else {
        return false;
      }
    }
  
    return {
      setDate1,
      setDate2,
      getDay1,
      getDay2,
      sameDayCheck,
    };
  }
  