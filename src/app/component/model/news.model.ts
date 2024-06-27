
interface NewsProps {
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
newslist : NewsProps[];
}

