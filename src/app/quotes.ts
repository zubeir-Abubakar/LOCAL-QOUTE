export class Quotes {
    public showDescription:boolean
     constructor(public id:number, public name:string,public description:string,public postDate:Date){
         this.showDescription=false
  }
  }