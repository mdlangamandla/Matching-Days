var matchDays = {
    day: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    date: {
      date1: "First date",
      date2: "Second date",
    },
  };
  
  document.addEventListener("DOMContentLoaded", ()=> {
    var templateSource = document.querySelector("#matching_days_template").innerHTML;
    var matchingDaysTemplate = Handlebars.compile(templateSource);
    var matchingDaysHTML = document.querySelector("#matching_days");
    matchingDaysHTML.innerHTML = matchingDaysTemplate(matchDays);
    var date1 = document.querySelector("#date1");
    var date2 = document.querySelector("#date2");
    var dayElems = document.querySelectorAll(".day");
    var theseDays = matchingDays();
  
    date1.addEventListener("change", ()=> {
      dayClassesClear();
      theseDays.setDate1(date1.value);
      dayClasses();
    });
  
    date2.addEventListener("change", ()=> {
      dayClassesClear();
      theseDays.setDate2(date2.value);
      dayClasses();
    });
  
    function dayClasses() {
      if (theseDays.sameDayCheck()) {
        document.getElementById(theseDays.getDay1()).classList.add("sameday");
      } else {
        if (date1.value) {
          document.getElementById(theseDays.getDay1()).classList.add("date1day");
        }
        if (date2.value) {
          document.getElementById(theseDays.getDay2()).classList.add("date2day");
        }
      }
    }
  
    function dayClassesClear() {
      dayElems.forEach(function (day) {
        if (day.classList.contains("date1day")) {
          day.classList.remove("date1day");
        }
        if (day.classList.contains("date2day")) {
          day.classList.remove("date2day");
        }
        if (day.classList.contains("sameday")) {
          day.classList.remove("sameday");
        }
      });
    }
  });
  