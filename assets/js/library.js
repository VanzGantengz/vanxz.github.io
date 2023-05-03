var rap = {
  github: function(){
    const repoNames = [
      'database',
      'rioagungpurnomo.github.io'
      ];
    const apiUrl = 'https://api.github.com/users/rioagungpurnomo/repos';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter((repo) => !repoNames.includes(repo.name));

      filteredData.forEach((repository) => {
        const repositoryHtml = `
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <h4><a href="${repository.html_url}" target="_blank">${repository.name}</a></h4>
              <p>${repository.description}</p>
              <span><i class="bx bx-code"></i> ${repository.language}&nbsp;&nbsp;</span> <span><i class="bx bx-star"></i> ${repository.stargazers_count}</span>
            </div>
          </div>
        `;
        return repositoryHtml;
      });
    })
    .catch((error) => {
      console.error(error);
    });
  },
  age: function(){
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
  
  return differenceYear + ' years old';
  }
};
