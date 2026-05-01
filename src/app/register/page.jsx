'use client'
import RegisterForm from "@/Components/Forms/RegisterForm";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const [showpassword, setshowpassword] = useState(false)
    const router = useRouter();
    const onSubmit = async (data) => {
        // console.log(data, 'register data')
        const { name, email, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            image: photo,
            password: password,
            // callbackURL: '/login'
        })
        // console.log(res, error)
        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success('Register Successful')
        }
        setTimeout(() => {
            router.push("/login");
        }, 800);
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
    return <RegisterForm 
    showpassword={showpassword} 
    setshowpassword={setshowpassword} 
    GoogleSignIn={GoogleSignIn} 
    GithubSignIn={GithubSignIn} 
    onSubmit={onSubmit}
    />
}

export default RegisterPage