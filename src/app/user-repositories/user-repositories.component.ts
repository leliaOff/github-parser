import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GithubRepository } from '../githubRepository';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.css']
})
export class UserRepositoriesComponent implements OnInit {
    
    repos: GithubRepository[];

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private githubService: GithubService) { }

    ngOnInit() {
        this.getRepos();
    }

    getRepos(): void {
        const login: string = this.route.snapshot.paramMap.get('login');
        this.githubService.getRepository(login)
            .subscribe(repos => this.repos = repos);
    }

}
