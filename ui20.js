class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        //console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3 row">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" class="btn btn-primary">View Profile</a>
                </div>
        
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br><br><br><br>
                    <ul class="list-group"> 
                        <li class="list-group-item">Company:${user.company}</li>
                        <li class="list-group-item">Website/Blog:${user.blog}</li>
                        <li class="list-group-item">Location:${user.Location}</li>
                        <li class="list-group-item">Member Since:${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>

        <h3 class="page-heading">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    showRepos(repos) {
        let output = '';

        //console.log(repos);
        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repos.html_url}" target="_black"${repo.name}></a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById('repos').innerHTML = output;
    }

        // SHOW ALERT MESSAGE
        showAlert(message, className) {
        //CLEAR ALERT
        this.clearAlert();
        // CREATE DIV
        const div = document.createElement('div');
        // ADD CLASS
        div.className = className;
        // ADD TEXT
        div.appendChild(document.createTextNode(message));
        // GET PARENT
        const container = document.querySelector('.searchContainer');
        // GET SEARCH BOX
        const search = document.querySelector('.search');
        // INSERT ALERT
        container.insertBefore(div, search);

        // TIMEOUT AFTER 3 SECS
        setTimeout(() => {
            this.clearAlert();
        }, 1000);
    }

    // CLEAR ALERT
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // CLEAR PROFILE
    clearProfile() {
        this.profile.innerHTML = '';
    }
}