import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import {
  faSearch,
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule], // Add FontAwesomeModule
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  // Icons
  faSearch = faSearch;
  faSort = faSort;
  faSortUp = faSortUp;
  faSortDown = faSortDown;

  // Data and state
  data: any[] = [];
  filteredData: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  searchText: string = ''; // For search filter (name/email)
  usernameFilter: string = ''; // For username filter
  uniqueUsernames: string[] = []; // Unique usernames for dropdown
  sortColumn: string = ''; // Current column to sort
  sortDirection: 'asc' | 'desc' = 'asc'; // Sorting direction
  currentPage: number = 1; // Current page for pagination
  itemsPerPage: number = 5; // Items per page

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
        this.filteredData = response;
        this.uniqueUsernames = [
          ...new Set(response.map((item) => item.username)),
        ]; // Get unique usernames
        this.loading = false;
      },
      (error) => {
        this.error = true;
        this.loading = false;
      }
    );
  }

  // Filter method
  filter() {
    this.filteredData = this.data.filter(
      (item) =>
        (item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          item.email.toLowerCase().includes(this.searchText.toLowerCase())) &&
        (this.usernameFilter ? item.username === this.usernameFilter : true)
    );
    this.currentPage = 1; // Reset to first page after filtering
  }

  // Sorting method
  sort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredData.sort((a, b) => {
      if (a[column] < b[column]) return this.sortDirection === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Get sorting icon for a column
  getSortIcon(column: string) {
    if (this.sortColumn === column) {
      return this.sortDirection === 'asc' ? this.faSortUp : this.faSortDown;
    }
    return this.faSort;
  }

  // Pagination methods
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredData.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }
}
