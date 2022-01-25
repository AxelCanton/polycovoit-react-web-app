export interface IAddUserRequiredProps {
    createUser: (user:ICreateUser) => void
    closeModal: () => void
}

export interface IAddUserOptionalProps {

}

export interface IAddUserProps extends IAddUserRequiredProps, IAddUserOptionalProps {}

export interface ICreateUser {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    gender: string;
    speciality: string;
}