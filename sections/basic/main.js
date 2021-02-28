const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((error) => console.error(error));

  document.getElementById("repo-list").innerHTML = repos
    .map(
      (repo) => `<li>
    <a href=${repo.html_url}>${repo.name}</a>
    <span>(Stars: ${repo.stargazers_count})</span>
    </li>`
    )
    .join("");
};

listRepos("jamesbyrne89");
