
export interface content {
    word: string;
    translate: string;
    _id:string;
    userId:string;
    stars?:number;
    learned?:boolean;
}

export interface addWord{
    word?: string;
    translate?: string;
    stars?:number;
    learned?:boolean;

}