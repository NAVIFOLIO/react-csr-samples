import { type FC } from 'react';
import { apps_info } from '@/routes/AppsInfo';
import { LinkCardsList } from './AppCardsList';

const Home: FC = () => {
    return <LinkCardsList info={apps_info} />;
};

export default Home;
