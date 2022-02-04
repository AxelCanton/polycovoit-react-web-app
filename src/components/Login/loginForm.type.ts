export interface ILoginFormRequiredProps {
    onLoginClick: (email: string, password: string, rememberUser: boolean) => void
}

export interface ILoginFormOptionalProps {
    isLoading: boolean
}

export interface ILoginFormProps extends ILoginFormOptionalProps, ILoginFormRequiredProps {}