// 
import { ReactNode } from 'react';

export type SectionType = {
    title: string|React.ReactNode;
    content: React.ReactNode;
    id:string;
    subsections: SectionType[];
};

