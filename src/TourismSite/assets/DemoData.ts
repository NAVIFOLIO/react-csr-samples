import singapore from './images/singapore.webp';
import theatrum from './images/theatrumMarcelli.webp';
import bigben from './images/bigben.webp';
import palais from './images/palaisDeVersailles.jpg';

export type TouristSpot = {
    id: number;
    country: string;
    imageUrl: string;
    wikiTitle: string;
};

// loose type definition
// type Legend = string[];

// strict definition of type
type Legend = [string, string];

// loose type definition
// type DataRow = (string | number)[];

// strict definition of type
type DataRow = [string, number];

type Data<T, U> = [T, U, ...U[]];

export type BarChartData = {
    [K: number]: Data<Legend, DataRow>;
};

export const touristSpots: Array<TouristSpot> = [
    {
        id: 1,
        country: 'Singapore',
        imageUrl: singapore,
        wikiTitle: 'Tourism_in_Singapore',
    },
    {
        id: 2,
        country: 'United Kingdom',
        imageUrl: bigben,
        wikiTitle: 'Tourism_in_the_United_Kingdom',
    },
    {
        id: 3,
        country: 'Italy',
        imageUrl: theatrum,
        wikiTitle: 'Tourism_in_Italy',
    },
    {
        id: 4,
        country: 'France',
        imageUrl: palais,
        wikiTitle: 'Tourism_in_France',
    },
];

export const data: BarChartData = {
    1: [
        ['Year', 'Number of Tourists[millions]'],
        ['2010', 11.64],
        ['2011', 13.17],
        ['2012', 14.49],
        ['2013', 15.56],
        ['2014', 15.09],
        ['2015', 15.23],
        ['2016', 16.4],
        ['2017', 17.42],
        ['2018', 18.5],
        ['2019', 19.11],
        ['2020', 2.74],
        ['2021', 0.33],
        ['2022', 6.3],
        ['2023', 13.61],
    ],
    2: [
        ['Year', 'Number of Tourists[millions]'],
        ['2010', 30.4],
        ['2011', 31.9],
        ['2012', 32.2],
        ['2013', 33.6],
        ['2014', 35.3],
        ['2015', 36.8],
        ['2016', 39.1],
        ['2017', 41.1],
        ['2018', 40.3],
        ['2019', 40.9],
        ['2020', 11.1],
        ['2021', 6.4],
        ['2022', 31.2],
        ['2023', 37.5],
    ],
    3: [
        ['Year', 'Number of Tourists[millions]'],
        ['2010', 43.6],
        ['2011', 46.1],
        ['2012', 46.4],
        ['2013', 47.7],
        ['2014', 48.6],
        ['2015', 50.7],
        ['2016', 52.4],
        ['2017', 58.3],
        ['2018', 61.6],
        ['2019', 64.5],
        ['2020', 25.2],
        ['2021', 26.9],
        ['2022', 49.8],
        ['2023', 57.3],
    ],
    4: [
        ['Year', 'Number of Tourists[millions]'],
        ['2010', 76.6],
        ['2011', 80.5],
        ['2012', 82.0],
        ['2013', 83.6],
        ['2014', 83.7],
        ['2015', 84.5],
        ['2016', 82.7],
        ['2017', 86.8],
        ['2018', 89.3],
        ['2019', 90.9],
        ['2020', 41.7],
        ['2021', 48.4],
        ['2022', 79.4],
        ['2023', 100],
    ],
};

type BarChartOption = {
    chart: {
        title: string;
        subtitle: string;
    };
    legend: {
        position: 'none';
    };
};

export const barChartOptions: Array<BarChartOption> = touristSpots.map(
    (spot) => {
        return {
            chart: {
                title: `How many tourists visit ${spot.country}`,
                subtitle: 'Number of tourists: 2010-2023 [millions]',
            },
            legend: { position: 'none' },
        };
    }
);
