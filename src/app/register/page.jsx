'use client'
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (e) => {
        console.log(e, 'register data')

    }
    return (
        <div className='flex items-center justify-center h-[800px] mt-12'>
            <Form className="flex w-96 flex-col gap-4 border rounded-2xl p-5 space-y-4"
                onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
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
                    type="password"
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
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit" className={'w-full'}>
                        <Check />
                        Register
                    </Button>
                </div>
                <div className="text-center font-bold">------ OR ------</div>
                <div>
                    <Button variant="outline" className={'rounded w-full'}>Connect With <FcGoogle /> Google</Button>
                </div>
                <div>
                    <Button variant="outline" className={'rounded w-full'}>Connect With <FaGithub />Github</Button>
                </div>
            </Form>
        </div>
    )
}

export default RegisterPage