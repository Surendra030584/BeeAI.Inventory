import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrl: './adminlayout.component.css'
})
export class AdminlayoutComponent {
  isDropdownOpen: { [key: string]: boolean } = {};
  isSidebarOpen: any;
  
  
  private _router = inject(Router)
  
  
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  
  
  
  ngOnInit() {
    this.initAdminSettings();
  }
  
    toggleDropdown(dropdown: string): void {
      
      if (this.isDropdownOpen[dropdown]) {
        this.isDropdownOpen[dropdown] = false;
      } else {
  
        this.closeAllDropdowns();
  
        this.isDropdownOpen[dropdown] = true;
      }
    }
    closeAllDropdowns(): void {
      this.isDropdownOpen = {};
    }
    isSidebarCollapsed = false;
  
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  
  
  
    initAdminSettings() {
      throw new Error('Method not implemented.');
    }
  
    ngAfterViewInit() {
      this.renderer.listen('document', 'click', (event: MouseEvent) => {
        const sidebarElement = this.el.nativeElement.querySelector('.sidebar, .show-sidebar');
        if (this.isSidebarOpen && sidebarElement && !sidebarElement.contains(event.target)) {
          this.closeSidebar(); // Close the sidebar if clicking outside
        }
      });
    }
  
  
  
    Sidebar() {
      const dataTheme = document.body.getAttribute("data-sidebartype");
      
      // Toggle the sidebar type
      if (dataTheme === "full") {
        document.body.setAttribute("data-sidebartype", "mini-sidebar");
        this.isSidebarOpen = true; // Open the sidebar when switching to mini-sidebar
      } else {
        document.body.setAttribute("data-sidebartype", "full");
        this.isSidebarOpen = false; // Close the sidebar when switching back to full
      }
    }
  
  
    closeSidebar() {
      this.isSidebarOpen = false; // Close the sidebar
      document.body.setAttribute("data-sidebartype", "full"); // Reset to full on close
    }
  
}
