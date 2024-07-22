import { useState, useEffect, type FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import { Chart } from 'react-google-charts';
import { touristSpots, data, barChartOptions } from './assets/DemoData';
import { WikiInfo } from './components/WikiInfo';
import ExampleHeader from './components/ExampleHeader';

const wikiTitles: Array<string> = touristSpots.map((spot) => spot.wikiTitle);

const TourismSite: FC = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [wikiTitle, setWikiTitle] = useState(wikiTitles[0]);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
            setWikiTitle(wikiTitles[api.selectedScrollSnap()]);
        });
    }, [api]);

    return (
        <>
            <div className="mb-10">
                <ExampleHeader />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
                <div className="grid grid-cols-1 gap-10">
                    <Carousel
                        className="max-w-sm mx-auto"
                        setApi={setApi}
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {Array.from({ length: touristSpots.length }).map(
                                (_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                                    <h2 className="font-bold my-3">
                                                        {
                                                            touristSpots[index]
                                                                .country
                                                        }
                                                    </h2>
                                                    <img
                                                        src={
                                                            touristSpots[index]
                                                                .imageUrl
                                                        }
                                                        alt={
                                                            touristSpots[index]
                                                                .country
                                                        }
                                                    />
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                )
                            )}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <Chart
                        className="max-w-lg mx-auto"
                        chartType="Bar"
                        height="400px"
                        data={data[current]}
                        options={barChartOptions[current - 1]}
                    />
                </div>
                <div>
                    <WikiInfo title={wikiTitle} />
                </div>
            </div>
        </>
    );
};

export default TourismSite;
