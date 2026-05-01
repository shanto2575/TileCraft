'use client'
import LoginForm from "@/Components/Forms/LoginForm";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const LogInPage = () => {
    
    const onSubmit = async (data) => {
        // console.log(data, 'input data')
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            callbackURL: '/'
        })
        // console.log(res, error)
        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success('LogIn Successful')
        }
    }

    const GoogleSignIn = async () => {
        const {data,error} = await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data, 'google data')
        if(error) toast.error(error.message)
    };
    //Github Login
    const GithubSignIn = async () => {
        const {data,error} = await authClient.signIn.social({
            provider: "github"
        })
        if(error) toast.error(error.message)
    }

    return <LoginForm
    GithubSignIn={GithubSignIn}
    GoogleSignIn={GoogleSignIn}
    onSubmit={onSubmit}
    />
}

export default LogInPage
