// Import the events directly from the JSON file
interface Event {
    title: string;
    date: string[];
}

export interface SitemapItem {
    url: string;
    lastModified: string | Date;
    changeFrequency?: "weekly" | "daily" | "always" | "hourly" | "monthly" | "yearly" | "never";
    priority?: number;
}

export type Sitemap = SitemapItem[];

export default async function sitemap(): Promise<Sitemap> {
    // Instead of using state, we directly use the imported data


    const URL = "https://isaacs.cloud";

    const restUrls: Sitemap = [
        {
            url: `${URL}/`, // Home Page
            lastModified: new Date().toISOString(),
            priority: 1.0,
            changeFrequency: "weekly",
        },
        {
            url: `${URL}/about`, // events Page
            lastModified: new Date().toISOString(),
            priority: 0.8,
            changeFrequency: "weekly",
        },
        {
            url: `${URL}/services`, // events Page
            lastModified: new Date().toISOString(),
            priority: 0.8,
            changeFrequency: "daily",
        },
        {
            url: `${URL}/side_projects`, // events Page
            lastModified: new Date().toISOString(),
            priority: 0.8,
            changeFrequency: "daily",
        },
    ];



    return [...restUrls];
}
