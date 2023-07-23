$(function() {
  // default page to load
  $('#content').load('home.html', setupHomeButtons);

  $('nav a').click(function(e) {
      e.preventDefault();
      let page = $(this).attr('href');
      $('#content').load(page, page === 'portfolio.html' ? setupPortfolioPage : setupHomeButtons);
      $('nav a').removeClass('active');
      $(this).addClass('active');
  });
});

function setupHomeButtons() {
  $('#portfolio-button').off().click(function(e) {
      e.preventDefault();
      $('#content').load('portfolio.html', setupPortfolioPage);
      updateActiveNavbarButton('portfolio.html');
  });

  $('#services-button').off().click(function(e) {
      e.preventDefault();
      $('#content').load('services.html');
      updateActiveNavbarButton('services.html');
  });

  $('#contact-button').off().click(function(e) {
      e.preventDefault();
      $('#content').load('contact.html');
      updateActiveNavbarButton('contact.html');
  });
}

function updateActiveNavbarButton(page) {
  $('nav a').removeClass('active');
  $('nav a[href="' + page + '"]').addClass('active');
}

function setupPortfolioPage() {
  setupPortfolioFilters();
  setupProjectLinks();
}

function setupPortfolioFilters() {
  const tagButtons = document.querySelectorAll('.tag-button');
  const projects = document.querySelectorAll('.project');
  
  if (tagButtons.length > 0 && projects.length > 0) {
    tagButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tag = button.dataset.tag;

        tagButtons.forEach(button => {
          button.classList.remove('active');
        });
        button.classList.add('active');

        projects.forEach(project => {
          if (tag === 'all' || project.dataset.tags.includes(tag)) {
            project.classList.remove('hide');
          } else {
            project.classList.add('hide');
          }
        });
      });
    });
  } else {
    console.error('Tag buttons or projects not found');
  }
}

function setupProjectLinks() {
  $('.image-grid a').off().click(function(e) {
    e.preventDefault();
    let projectPage = $(this).attr('href');
    $('#content').load(projectPage, setupProjectPage);
  });
}

function setupProjectPage() {
  $('.back-button').off().click(function(e) {
    e.preventDefault();
    $('#content').load('portfolio.html', setupPortfolioPage);
  });
}
