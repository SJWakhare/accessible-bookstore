import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'books',
    loadComponent: () =>
        import('./books/books.component').then(m =>m.BooksComponent)
  },
  {
    path: 'book/:id',
    loadComponent: ()=>
        import('./book-detail/book-detail.component').then(m=> m.BookDetailComponent)
  },
  {
    path: 'cart',
    loadComponent: ()=>
        import('./cart/cart.component').then(m => m.CartComponent)
  }
];
