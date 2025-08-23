import React, { useEffect, useState } from "react";
import "../../FreelanceAndDeveloper/css/component/GitContribution.css";

const GitContribution = () => {
  const username = "SAMUVELREEGAN";
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=10`)
      .then((res) => res.json())
      .then(setRepos)
      .catch(console.error);
  }, [username]);

  return (
    <div className="git-section">
      <h2>GitHub Contributions</h2>

      <div className="git-container">
        {/* Left Section */}
        <div className="git-left">
          <img
            src={`https://github.com/${username}.png`}
            alt="Profile"
            className="profile-img"
          />
          <p className="profile-description">
            Passionate developer exploring full-stack web technologies. Building cool stuff on GitHub!
          </p>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            Visit GitHub Profile
          </a>

          <div className="mt-3">
            #1 <span className="pe-1"></span><a href="https://happyfood-author-samuvelreegan.netlify.app/">html-food-1st-project</a><br />
            #2 <span className="pe-1"></span><a href="https://foodbootstrap-author-samuvelreegan.netlify.app/">html-food-2nd-project</a><br />
            #3 <span className="pe-1"></span><a href="https://api-communication-protocol.netlify.app/">fake-api-protocol-ui </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="git-right">
          <h3 className="projects-title">
            Recent Repositories 
            {/* ({repos.length}) */}
          </h3>

          <div className="repos-vertical-scroll">
            {repos.map((repo, index) => (
             <a
  key={repo.id}
  href={repo.html_url}
  className="repo-card"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="repo-card-content">
    <div className="repo-count">{index + 1}</div>
    <div className="repo-info">
      <h4>{repo.name}</h4>
      <p className="repo-date">
        Created: {new Date(repo.created_at).toLocaleDateString()}
      </p>
    </div>
  </div>
</a>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitContribution;
