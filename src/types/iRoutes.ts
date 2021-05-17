import {FC, ReactNode} from "react";

export   interface iRoutes{
    path: string;
    label: string;
    exact: boolean;
    component: FC;
    privat:boolean;
    restricted: boolean;
    children?:ReactNode;
}