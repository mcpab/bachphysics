export interface ValidConfigFilesData {
    filePath: string;
    content: string;
    image: string;
    title: string;
    link: string;
    order: number; // Add the order field
};

export interface ErrorConfigFilesData  {
    filePath: string;
    error: string;
};

export type ConfigFilesData = ValidConfigFilesData | ErrorConfigFilesData;

export type LayoutComponent = {
    title: string;
    results: ConfigFilesData[];
}

