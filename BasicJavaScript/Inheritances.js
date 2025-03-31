class Bank {
    constructor(roi) {
        this.roi = roi;
    }

    display() {
        console.log(this.roi);
    }
}

class HDFC extends Bank {
    constructor(roi, roi1) {
        super(roi);
        this.roi1 = roi1;
    }

    display() {
        console.log(this.roi1);
    }
}

let hdfc = new HDFC(5.1,8.5);
HDFC.prototype.name = "HDFC Bank";
hdfc.display();
console.log(hdfc.name);
