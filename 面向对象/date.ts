class myDate {
  private year: number;
  private month: number;
  private date: number;
  constructor(year?: number, month?: number, date?: number) {
    this.year = year || 1970;
    this.month = month || 1;
    this.date = date || 1;
  }

  printDate(): void {
    console.log(`${this.year}-${this.month}-${this.date}`);
  }
}

let date = new myDate();
date.printDate();
