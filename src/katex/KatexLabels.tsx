
class lbls {

    eqCounter = 0;
    lbl: { [key: string]: number } = {};

    addLabel(label: string) {
        this.eqCounter = this.eqCounter + 1;
        this.lbl[label] = this.eqCounter;
    }
    getLabel(label: string): number {
        return this.lbl[label];
    }

}

var Labels = new lbls();

export default Labels;

