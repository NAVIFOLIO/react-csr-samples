import React from 'react';
import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { type LinkCardProps } from './Home';
import { Button } from './ui/button';
import { Github } from 'lucide-react';

const LinkCard: FC<LinkCardProps> = ({ link, title, description }) => {
    return (
        <div className="basis-1/4 ">
            <NavLink to={link}>
                <Card>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>TypeScript + Vite Project</p>
                    </CardContent>
                    <CardFooter className='flex justify-center'>
                        <Button>
                            <Github className="mr-2 h-4 w-4" />
                            Open in Git
                        </Button>
                    </CardFooter>
                </Card>
            </NavLink>
        </div>
    );
};

export default LinkCard;
