import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  service=inject(ApiService)

  search = new FormControl('');
  ngOnInit(): void {
    
    this.search.valueChanges.pipe(debounceTime(500),distinctUntilChanged()).
    subscribe(data=>{
      console.log(data)
      this.service.searchQuery.set(data)
      
      
    })
  }
}
