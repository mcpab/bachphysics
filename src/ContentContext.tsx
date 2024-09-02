'use client'

import { SectionType } from './types';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';


// Define the type for the context
type ContentType = {
    content: SectionType[];
    setContent: (content: SectionType[]) => void;
};

// Create the context with an empty array of strings as the default value
const Content = createContext<ContentType | undefined>(undefined);

export const useContentContext = () => {

    const context = useContext(Content);
    if (!context) {
        throw new Error('useContentContext must be used within a ContentProvider');
    }
    return context;
};

interface ContentProviderProps {
    children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {

    const [content, setContent] = useState<SectionType[]>([]);

    return (
        <Content.Provider value={{ content, setContent }}>
            {children}
        </Content.Provider>
    );
};


interface ContentSetterType {
    sections: SectionType[];
}


export const ContentSetter: React.FC<ContentSetterType> = ({sections}) => {

    const { content, setContent } = useContentContext();

    useEffect(() => {
        console.log('Setting content:', sections);
        setContent(sections);
    }, [sections]);

    return null;
};

 

export default Content;