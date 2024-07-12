import React from 'react';
import { type FC } from 'react';
import LinkCard from './LinkCard';
import { type LinkCardProps } from './Home';

interface LinkCardListProps {
    texts: LinkCardProps[];
}

const LinkCards: FC<LinkCardListProps> = ({ texts }) => {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
            {texts.map((text) => (
                <LinkCard
                    key={text.id}
                    id={text.id}
                    link={text.link}
                    title={text.title}
                    description={text.description}
                    gitlink={text.gitlink}
                />
            ))}
        </div>
    );
};

export default LinkCards;
