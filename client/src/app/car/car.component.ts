import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  carId: string | null = null;
  car: any;

  cars: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {

    // Load the car data from the JSON file
    this.http.get<any[]>('assets/cars.json').subscribe((data) => {
      this.cars = data;

    // Get the car id from route parameters
    this.route.paramMap.subscribe(params => {
      this.carId = params.get('id'); // Get car ID from the URL
      if (this.carId) {
        this.car = this.cars.find(c => c.id === this.carId); // Find the car by its ID
      }
    });
  });
  }
}
