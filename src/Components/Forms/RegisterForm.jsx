import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const RegisterForm = ({ onSubmit, GithubSignIn, GoogleSignIn, showpassword, setshowpassword }) => {
    const { register, handleSubmit } = useForm()
    return (
        <div className='flex items-center justify-center h-[800px] mt-8'>
            <Form className="flex w-[500px] flex-col gap-4 border rounded-2xl p-5 space-y-4"
                onSubmit={handleSubmit(onSubmit)}>
                <h2 className=" md:text-3xl font-bold text-center text-gray-800">
                    Register to Your Account
                </h2>
                <TextField
                    isRequired
                    name="name"
                    type="text"
                >
                    <Label className="text-xl">Name</Label>
                    <Input placeholder="Enter your Name" {...register("name")} />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="image"
                    type="text"
                >
                    <Label className="text-xl">Image URL</Label>
                    <Input className="rounded-xl border-border/60" placeholder="Enter your Image URL" {...register("image")} />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label className="text-xl">Email</Label>
                    <Input placeholder="Enter Your Email" {...register("email")} />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    className={'relative '}
                    type={showpassword ? 'text' : "password"}
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label className="text-xl">Password</Label>
                    <Input placeholder="Enter your password" {...register("password")} />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                    <span onClick={() => setshowpassword(!showpassword)} className='cursor-pointer absolute top-11 right-4'>
                        {showpassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit" className={'w-full'}>
                        <Check />
                        Register
                    </Button>
                </div>
                <p className="text-gray-600 text-md text-center">
                    You have an account?{" "}
                    <Link href="/login" className="text-amber-500 font-semibold hover:underline">
                        LogIn
                    </Link>
                </p>
                <div className="text-center font-bold">------ OR ------</div>
                <div>
                    <Button type='button' variant="secondary" className={'rounded w-full'} onClick={GoogleSignIn}>Connect With <FcGoogle /> Google</Button>
                </div>
                <div>
                    <Button type='button' variant="secondary" className={'rounded w-full'} onClick={GithubSignIn}>Connect With <FaGithub />Github</Button>
                </div>
            </Form>
        </div>
    )
}

export default RegisterForm