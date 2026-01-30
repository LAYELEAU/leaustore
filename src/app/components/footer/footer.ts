import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer implements OnInit {
  
  currentYear = new Date().getFullYear();
  companyName = 'TechStore';

  ngOnInit(): void {
    this.initStatsAnimation();
  }

  handleNewsletter(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('input[type="email"]') as HTMLInputElement;
    
    if (this.validateEmail(input.value)) {
      // Appel API newsletter
      console.log('Newsletter:', input.value);
      // Afficher succès
    }
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private initStatsAnimation(): void {
    // Copier la logique de footer.js
  }
  
}
  


