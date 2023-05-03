var rap = {
  project: function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://rioagungpurnomo.github.io/project.json");
    xhr.onload = function () {
      if (xhr.status === 200) {
        const dataObj = JSON.parse(xhr.responseText);

        if (dataObj) {
          const project = document.querySelector("#list-project");

          dataObj.forEach((repository) => {
            const html = `
  <div class="col-12 col-md-4 mb-3" data-aos="zoom-in" data-aos-delay="100">
    <div class="icon-box iconbox-blue">
      <h4><a href="${repository.url}" target="_blank">${repository.name}</a></h4>
      <p>${repository.description}</p>
      <span><i class="bx bx-code-alt"></i> ${repository.language}</span>
    </div>
  </div>
`;
            project.innerHTML += html;
          });
        } else {
          console.log(null);
        }
      } else {
        console.log(null);
      }
    };

    xhr.send();
  },
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
