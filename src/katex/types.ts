export type EquationResult = {
    label: string;
    latex: string;
    html: string;
    number: number;
    pageId: number;
    pageName: string;
    message: string
};


 

export type PageResult = {
    id: number,
    pageName: string,
    link: string,
    message: string
}
 

export type EquationProps = 
  | { math: string; label: string; pageName: string } // Both label and pageName are defined
  | { math: string; label?: undefined; pageName?: undefined }; // Both label and pageName are undefined
