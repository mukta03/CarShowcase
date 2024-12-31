import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent implements OnInit {

  // Sample data for cars
  cars = [
    { id: 'car1', name: 'BMW iX', image: 'assets/img/car1.webp', brand: 'BMW' },
    { id: 'car2', name: 'BMW 6 Series', image: 'assets/img/car2.webp', brand: 'BMW' },
    { id: 'car3', name: 'BMW i7', image: 'assets/img/car3.webp', brand: 'BMW' },
    { id: 'car4', name: 'Lexus LM', image: 'assets/img/car4.webp', brand: 'Lexus' },
    { id: 'car5', name: 'Hyundai Creta N Line', image: 'assets/img/car5.webp', brand: 'Hyundai' },
    { id: 'car6', name: 'Volvo XC40 Recharge', image: 'assets/img/car6.webp', brand: 'Volvo' },
    { id: 'car7', name: 'MG Comet EV', image: 'assets/img/car7.webp', brand: 'MG' },
    { id: 'car8', name: 'MG ZS EV', image: 'assets/img/car8.webp', brand: 'MG' },
    { id: 'car9', name: 'BYD Seal', image: 'assets/img/car9.webp', brand: 'BYD' },
    { id: 'car10', name: 'Hyundai Venue', image: 'assets/img/car10.webp', brand: 'Hyundai' },
    { id: 'car11', name: 'MG Hector', image: 'assets/img/car11.webp', brand: 'MG' },
    { id: 'car12', name: 'Tata Nexon', image: 'assets/img/car12.webp', brand: 'Tata' },
    { id: 'car13', name: 'Tata Nexon EV', image: 'assets/img/car13.webp', brand: 'Tata' },
    { id: 'car14', name: 'Land Rover Discovery', image: 'assets/img/car14.webp', brand: 'Land Rover' },
    { id: 'car15', name: 'Mahindra Thar', image: 'assets/img/car15.webp', brand: 'Mahindra' }
  ];

  // Unique brands list
  brands = ['BMW', 'Lexus', 'Hyundai', 'Volvo', 'MG', 'BYD', 'Tata', 'Land Rover', 'Mahindra'];

  // Filtered cars based on the selected brand
  filteredCars = this.cars;

  // Selected brand for filtering
  selectedBrand: string = '';

  constructor() { }

  ngOnInit(): void {}

  // Function to filter cars based on the selected brand
  filterCars() {
    if (this.selectedBrand === '') {
      this.filteredCars = this.cars; // No filter, show all cars
    } else {
      this.filteredCars = this.cars.filter(car => car.brand === this.selectedBrand);
    }
  }
}