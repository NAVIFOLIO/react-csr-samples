import { ElementType } from 'react';
import { NavLink } from 'react-router-dom';

import { type HeaderProps } from './Header';
import { type AppCardProps } from './AppCard';

type InternalLinkContainerProps = {
    as: ElementType;
    internalLink: string;
} & CustomComponentProps;

type CustomComponentProps = HeaderProps | AppCardProps;

export function InternalLinkContainer({
    as,
    internalLink,
    ...rest
}: InternalLinkContainerProps) {
    const Component = as;
    return (
        <NavLink to={internalLink}>
            <Component {...rest} />
        </NavLink>
    );
}
