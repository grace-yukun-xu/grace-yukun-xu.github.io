$(document).ready(function () {
  let lang = localStorage.getItem("lang");

  if (!lang) {
    localStorage.setItem("lang", "en");
  }

  const navbar_data = {
    title: lang === "fa" ? faNavbarData.title : "Home",
    navbar_links: [
      // 去掉home键
      //{
      //  active: navbarLinks.home ? true : false,
      //  title: lang === "fa" ? faNavbarData.Home : enNavbarData.Home,
      //  url: "/",
      //},
      {
        active: navbarLinks.publications ? true : false,
        title:
          lang === "fa" ? faNavbarData.publications : "Publications",
        url: "/publications.html",
      },
      {
        active: navbarLinks.research ? true : false,
        title: lang === "fa" ? faNavbarData.Research : enNavbarData.Research,
        url: "/research.html",
      },
      {
        active: navbarLinks.jobs ? true : false,
        title: lang === "fa" ? faNavbarData.Jobs : enNavbarData.Jobs,
        url: "/jobs.html",
      },
      // 去掉contact键
      //{
      //  active: navbarLinks.contact ? true : false,
      //  title: lang === "fa" ? faNavbarData.Contact : enNavbarData.Contact,
      //  url: "/contact.html",
      //},
      {
        active: navbarLinks.cv ? true : false,
        title: lang === "fa" ? faNavbarData.Jobs : "CV",
        url: "../files/cv_july.pdf",
      },
      {
        active: navbarLinks.r_state ? true : false,
        title: lang === "fa" ? faNavbarData.Jobs : "Research Statement",
        url: "",
      },
      {
        active: navbarLinks.t_state ? true : false,
        title: lang === "fa" ? faNavbarData.Jobs : "Teaching Statement",
        url: "",
      },
      {
        active: navbarLinks.archived ? true : false,
        title: lang === "fa" ? faNavbarData.Jobs : "Archived Links",
        url: "",
      },
    ],
  };

  function navbarData() {
    document.getElementById("navbar_title").innerHTML = navbar_data.title;
    document.getElementById("navbar_title").href = "/";
    document.getElementById("navbar_links").innerHTML = navbar_data.navbar_links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li class="nav-item">
              <a
              ${
                window.location.pathname === link.url
                  ? "class='nav-link active'"
                  : "class='nav-link'"
              }
              href=${link.url}
              >${link.title}</a>
            </li>`
      )
      .join("");
  }

  navbarData();
});
