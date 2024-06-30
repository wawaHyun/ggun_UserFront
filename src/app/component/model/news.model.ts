interface INewsDummy {
    id: number;
    main: Boolean;
    img: any;
    title: string;
    paper: string;
    ref: any;
    time: any;
  }


interface INewsToday {
title:string,
newslist : INewsDummy[];
}

interface INews {
    id?:number,
    imgLink : string,
    title : string,
    content : string,
    imgSrc : string,
  }