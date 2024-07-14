import 'katex/dist/katex.min.css';

export class KatexEnv {

 

    eqCounter:number;
    lbl: { [key: string]: [number,React.ReactNode] }={};
    katex:any;

    constructor() {
        this.eqCounter = 0;
        this.lbl ={};
        this.katex = require('katex');
    }


      
    public addLabel(label:string,zoom:React.ReactNode): void {
        if( label in this.lbl ) return;
        this.eqCounter = this.eqCounter + 1;
        this.lbl[label] = [this.eqCounter,zoom];
    }

    public getLabel(label: string): [number,React.ReactNode] {
        return this.lbl[label];
    }

    public render(math:string,displayMode:boolean=true):string {

        const macros = {
            "\\vb": "\\textbf",
            "\\vb*": "\\textbf",
            "\\grad": "\\nabla"
          };
        
          try {

            const rd = this.katex.renderToString(math, {
 
                output: 'html',
                displayMode: displayMode,
                macros: macros
    
    
            });

            return rd;
          } catch (error:any) {
            return `<span style="background-color: yellow; color: red;">Error rendering TeX expression: ${error.message}</span>`;
        }
        
    }
}

var Ktx = new KatexEnv();


export default Ktx;


