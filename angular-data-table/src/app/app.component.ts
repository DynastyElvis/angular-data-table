import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this line
import { DataTableComponent } from './data-table/data-table.component'; // Add this line

@Component({
  selector: 'app-root',
  standalone: true, // Add this line
  imports: [CommonModule, DataTableComponent], // Add this line
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-data-table';
}