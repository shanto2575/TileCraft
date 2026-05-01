'use client'
import LoginForm from "@/Components/Forms/LoginForm";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";

const LogInPage = () => {
    const [showpassword, setshowpassword] = useState(false)
    
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
        const data = await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data, 'google data')
    };
    //Github Login
    const GithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })

    }

    return <LoginForm
    GithubSignIn={GithubSignIn}
    GoogleSignIn={GoogleSignIn}
    onSubmit={onSubmit}
    showpassword={showpassword}
    setshowpassword={setshowpassword}
    />
}

export default LogInPage
