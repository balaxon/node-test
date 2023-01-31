import { SmallCar } from './interfaces';

export class RandomCar {

  randomName() {
    const cars: string[] = [
      'Audi A1',
      'Audi R8',
      'Alfa Romeo Brera',
      'Alfa Romeo GT',
      'Audi A2',
      'Alfa Romeo 156',
      'Audi A3',
      'Audi A4',
      'Alfa Romeo 155',
      'BYD Tang',
      'BMW i8',
      'BMW i3',
      'BYD Qin',
      'BYD e6',
      'BYD F3DM',
      'Bugatti Veyron',
      'BMW X5',
      'BMW Z8',
      'Bugatti EB110',
      'Chrysler Aspen Hybrid',
      'Cadillac ELR',
      'Chevrolet Volt',
      'Chevrolet Cruze',
      'Chrysler Town & Country',
      'Daihatsu Copen',
      'De Tomaso Guarà',
      'Dodge Viper',
      'Dodge Stealth',
      'Dodge Aries/Plymouth Reliant',
      'DMC DeLorean',
      'De Tomaso Longchamp',
      'Ferrari 328',
      'Ferrari F40',
      'Ferrari 348',
      'Ferrari 456',
      'Ferrari 333 SP',
      'Ferrari F355',
      'Ferrari F50',
      'Ferrari 550 Maranello',
      'Ferrari 575M Maranello',
      'Ferrari 360',
      'Enzo Ferrari',
      'Ferrari F430',
      'Ferrari 458',
      'Ferrari FF',
      'LaFerrari',
      'Fisker Karma',
      'Ford Fiesta',
      'Ford Fiesta',
      'Ford Focus',
      'Ford Granada (North America)',
      'Ford GT',
      'Ford LTD',
      'Ford Model A',
      'Ford Model T',
      'Ford Mustang',
      'Ford Puma',
      'Ford Ranchero',
      'Ford Ranger',
      'Jaguar XJ',
      'Jaguar XJS',
      'Jaguar XJR-15',
      'Jaguar XJ220',
      'Jaguar XK',
      'Jaguar X-Type',
      'Jaguar XF',
      'Lamborghini Diablo',
      'Lamborghini Espada',
      'Lamborghini Gallardo',
      'Lamborghini Huracán',
      'Lamborghini Islero',
      'Lamborghini Urus',
      'Land Rover Discovery Sport',
      'Land Rover Range Rover',
      'Range Rover Evoque',
      'Range Rover Sport',
      'McLaren P1',
      'McLaren 12C',
      'Maserati MC12',
      'Maserati GranTurismo',
      'Maybach 57 and 62',
      'Mercury Marauder',
      'Mercury Mariner',
      'Mercury Milan',
      'Mercury Monterey (minivan)',
      'Porsche 911',
      'Porsche 959',
      'Porsche 968',
      'Porsche Boxster',
      'Porsche Cayenne',
      'Porsche Carrera GT',
      'Porsche Panamera',
      'Porsche 918',
      'Porsche Macan',
      'Renault Twingo',
      'Renault Twizy',
      'Renault Zoe',
      'Toyota Prius',
      'Toyota RAV4',
      'Lada',
    ];
    const random = Math.floor(Math.random() * 101);
    return cars[random];
  }

  randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  randomCars() {
    const cars: SmallCar[] = [];
    for (let i = 0; i < 100; i++) {
      const newCar: SmallCar = {
        name: this.randomName(),
        color: `#${this.randomColor()}`,
      };
      cars.push(newCar);
    }
    return cars;
  }
}
