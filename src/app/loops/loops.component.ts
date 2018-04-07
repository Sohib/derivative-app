import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loops',
    templateUrl: './loops.component.html',
})
export class LoopsComponent implements OnInit {
    cities: string[] = [
        'Riyadh',
        'Onizah',
        'Mecca',
        'Jeddah',
    ];
    pepole: {
        name: string;
        age: number;
        city: string;
    }[] = [
            { name: 'Sohib', age: 21, city: this.cities[0] },
            { name: 'Hammed', age: 32, city: this.cities[1] },
            { name: 'Ai', age: 43, city: this.cities[2] },
            { name: 'Omar', age: 50, city: this.cities[3] }
        ];

    peopleByCity: {
        city: string;
        pepole: {
            name: string;
            age: number;
        }[];
    }[] = [
            {
                city: 'Riyadh',
                pepole: [
                    { name: 'Moath', age: 15 },
                    { name: 'Nasser', age: 22 },
                    { name: 'Mohanned', age: 24 }
                ]
            },
            {
                city: 'Damaam',
                pepole: [
                    { name: 'Moaid', age: 33 },
                    { name: 'Raed', age: 55 },
                    { name: 'Ramz', age: 39 }
                ]
            },
            {
                city: 'Yanbou',
                pepole: [
                    { name: 'Loai', age: 31 },
                    { name: 'Abdullah', age: 14 },
                    { name: 'Asem', age: 22 }
                ]
            }
        ];

    ngOnInit() {
    }
}
