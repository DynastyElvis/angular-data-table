import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this line
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-table',
  standalone: true, // Add this line
  imports: [CommonModule], // Add this line
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  data: any[] = [];
  loading: boolean = true;
  error: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
        this.loading = false;
      },
      (error) => {
        this.error = true;
        this.loading = false;
      }
    );
  }
}