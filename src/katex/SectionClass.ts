import React from 'react';
import { SectionType } from '../types';

class Section {

    title: string | React.ReactNode;
    id: string;
    content: React.ReactNode;
    subsections?: Section[];
    sections: SectionType[] = [];

    constructor(title: string | React.ReactNode) {
        this.title = title;

        if (typeof title === 'string') {
            this.id = title.toLowerCase().replace(/\s+/g, '-');
        } else {
            this.id = `id-${Math.random().toString(36)}`;
        }
        this.content = null;
    }

    public addSection(title: string | React.ReactNode): Section {

        if (!this.subsections) {
            this.subsections = [];

        }

        let section = new Section(title);
        this.subsections.push(section);

        return section;
    }

    public setContent(content: React.ReactNode) {
        this.content = content;
    }

    public getSections(): SectionType {

        let sections: SectionType = {
            title: this.title,
            content: this.content,
            id: this.id,
            subsections: []
        };

        if (this.subsections) {
            this.subsections.forEach((section) => {
                sections.subsections.push(section.getSections());
            });
        }

        return sections
    }

}

export default Section;

