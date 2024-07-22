import { type WikiInfo } from '@/pseudo-app-page/components/WikiInfo';
import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    isAxiosError,
} from 'axios';

import { showNotification } from '@mantine/notifications';

export type WikiInfo = {
    url: string;
    title: string;
    summary: string;
    thumbnail: string;
    error?: string;
};

export const getWikiSummary = async (
    lang: 'en' | 'ja',
    title: string
): Promise<WikiInfo> => {
    const wikiInfo: WikiInfo = {
        url: '',
        title: '',
        summary: '',
        thumbnail: '',
    };

    const url: string =
        lang === 'en'
            ? 'https://en.wikipedia.org/api/rest_v1/page/summary'
            : 'https://ja.wikipedia.org/api/rest_v1/page/summary';

    const options: AxiosRequestConfig = {
        url: `${url}/${title}`,
        method: 'GET',
    };

    try {
        const res: AxiosResponse<any> = await axios(options);
        const items = res.data;

        console.log(res.data);
        wikiInfo.url = items.content_urls.desktop.page;
        wikiInfo.title = items.title;
        wikiInfo.summary = items.extract_html;
        wikiInfo.thumbnail = items.thumbnail.source;
    } catch (error: any) {
        if (isAxiosError(error)) {
            const { status, message } = error;
            wikiInfo.error = `Error: status: ${status}, ${message}`;
        } else {
            wikiInfo.error = `Some unknown Error Occured.`;
        }
    }

    return wikiInfo;
};
