var rap = {
  age: function () {
    var now = new Date();
    var yearNow = now.getFullYear();
    var monthNow = now.getMonth() + 1;
    var dateNow = now.getDate();
    var differenceYear = yearNow - 2004;

    if (monthNow < 3) {
      differenceYear--;
    } else if (monthNow == 3) {
      if (dateNow < 26) {
        differenceYear--;
      }
    }

    var output = differenceYear + " years old";
    return output;
  },
};
