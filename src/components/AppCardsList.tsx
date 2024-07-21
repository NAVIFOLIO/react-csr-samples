import { type FC } from 'react';
import { InternalLinkContainer } from './LinkContainer';
import AppCard from './AppCard';
import { type AppsInfoType } from '@/routes/AppsInfo';

type LinkCardsListProps = {
    info: AppsInfoType;
};

export const LinkCardsList: FC<LinkCardsListProps> = ({ info }) => {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
            {info.APPs.map((content) => (
                <InternalLinkContainer
                    as={AppCard}
                    internalLink={content.internalLink}
                    key={content.id}
                    title={content.title}
                    description={content.description}
                    gitlink={content.gitlink}
                />
            ))}
        </div>
    );
};
