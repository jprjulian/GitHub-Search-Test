class Github {
    constructor() {
        this.client_id = '6485a9709acae9db46c3';
        this.client_secret = '73c5d464b0785ed32aeece8b19ba4077c46a5b32';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // REPOS
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        // REPOS
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}