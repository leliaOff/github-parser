import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GithubUser } from '../githubUser';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search-string',
  templateUrl: './search-string.component.html',
  styleUrls: ['./search-string.component.css']
})
export class SearchStringComponent implements OnInit {

    users: GithubUser[];

    search: string;
    
    constructor(private githubService: GithubService) { }

    ngOnInit() {
        
    }

    searchOnChange($event) {
        this.getUsers();
    }

    getUsers(): void {
        if(this.search == '') return;
        this.githubService.getUsers(this.search)
            .subscribe(users => this.users = users);
    }

}
