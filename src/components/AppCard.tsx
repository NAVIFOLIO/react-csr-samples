import React, { type FC } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import { Github } from 'lucide-react';

export type AppCardProps = {
    title: string;
    description: string;
    gitlink: string;
};

const AppCard: FC<AppCardProps> = ({ title, description, gitlink }) => {
    function handleClickExternalLinkButton(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        externalLink: string
    ) {
        event.preventDefault();
        window.open(externalLink, '_blank');
    }

    return (
        <div className="basis-1/4 ">
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>TypeScript + Vite Project</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button
                        onClick={(e) => {
                            handleClickExternalLinkButton(e, gitlink);
                        }}
                    >
                        <Github className="mr-2 h-4 w-4" />
                        Open in Git
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AppCard;
