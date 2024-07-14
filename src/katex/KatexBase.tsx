
// Katex Base classes
import 'katex/dist/katex.min.css';

abstract class KatexBase {


    head:string
    tail:string
    macros: { [key:string] : string}
    katex:any;
    displayMode:boolean = false

    constructor(head:string,tail:string) {

        this.head=head;
        this.tail=tail;
        this.katex = require('katex');

        this.macros = {
            "\\vb": "\\textbf",
            "\\vb*": "\\textbf",
            "\\grad": "\\nabla"
          };

    }

    public setDisplayMode(displayMode:boolean) {
        this.displayMode=displayMode;
    }
    
    public getDisplayMode():boolean {
        return this.displayMode;
    }

    abstract  getContent() :string;

    public render():string {

          try {

            const rd = this.katex.renderToString( this.getContent() , {
 
                output: 'html',
                displayMode: this.getDisplayMode(),
                macros: this.macros
    
    
            });

            return rd;
          } catch (error:any) {
            return `<span style="background-color: yellow; color: red;">Error rendering TeX expression: ${error.message}</span>`;
        }
        
    }

}