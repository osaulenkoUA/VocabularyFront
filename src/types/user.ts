export interface userCurrent {
    name: string;
    email: string;
    password?: string;
    passwordConfirm?: string;
}

export interface logInUser {

    email: string;
    password: string;

}