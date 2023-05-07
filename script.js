const searchGithub = async () => {
  const username = document.getElementById("searchInput");
  const response = await fetch(`https://api.github.com/users/${username}`);
  const detailsContainer = document.querySelector(".details");
  const data = await response.json();

  if (response.success) {
    detailsContainer.style.display = "flex";
    document.getElementById("result").innerHTML = `
      <div class="profile">
        <div class="profile-image">
          <img src="${data.avatar_url}" />
        </div>
        <div class="profile-details">
          <h2 class="name">${data.name || data.login}</h2>
          <p class="username">@${data.login}</p>
          <p class="bio">${data.bio || "Account doesn't have a bio."}</p>

          <div class="stats">
            <div>
              <div class="stats-name">Public Repos</div>
              <div class="stats-value">${data.public_repos}</div>
            </div>
        </div>
      </div>
    `;
  }
};
