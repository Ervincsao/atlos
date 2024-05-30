// File: app.ts
// Author: Fülöp Ervin
// Copyright: 2024, Fülöp Ervin
// Group: I-2-N
// Date: 2024-05-30
// Github: https://github.com/Ervincsao/
// Licenc: GNU GPL
class Atlos {
    aSide?: HTMLInputElement | null;
    bSide?: HTMLInputElement | null;
    diagonal?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }
    bindHtml() {
        this.aSide = document.querySelector('#aSide');
        this.bSide = document.querySelector('#bSide');
        this.diagonal = document.querySelector('#diagonal');
        this.calcButton = document.querySelector('#calcButton');
    }
    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        })
    }
    startCalc() {
        const aSide = Number(this.aSide?.value);
        const bSide = Number(this.bSide?.value)
        const perimeter = this.calcDiagonal(aSide, bSide);
        this.diagonal!.value = String(perimeter);
    }
    calcDiagonal(aSide: number, bSide:number):number {
        return (aSide * aSide + bSide * bSide);
    }
}
new Atlos