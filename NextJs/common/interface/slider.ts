export interface ISlideItem {
    id: number | string,
    content: string | React.ReactNode | React.ReactNode[];
    subContent?: string | React.ReactNode | React.ReactNode[];
}