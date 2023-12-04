import "./styles.css";
import { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "laravel-precognition-react-inertia";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import SelectOption from "@/Components/SelectOption";

export default function Create({ auth, page_data, message, ...props }:any) {
    const [isLoading, setLoading] = useState(true);
    const [pagedata, setPagedata] = useState(page_data);
    useEffect(() => {
        setLoading(false);
    }, []);

    const { data, setData, processing, errors, submit, progress, reset } = useForm("post", route("user.store"),
        {
            name: "",
            role: "",
            password: "",
            email: ""
        }
    );
  

    const roleOptionData = [
        { value: "admin", name: "admin" },
        { value: "regular", name: "regular" },
    ];

    const handleOnChange = (event:any) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const handlesubmit = (e:any) => {
        e.preventDefault();
        submit({
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        });
    };
    return (
        <>
            <Head
                title="Create User"
            />
            <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
                <div className="container">
                    <div className="w-full flex flex-col justify-center items-center">
                        <h2 className="text-2xl">Add A User</h2>
                        {message && <div className="mb-4 font-medium text-sm text-center w-full items-center justify-center m-auto text-green-600">{message}</div>}
                        <form encType="multipart/form-data"
                            onSubmit={handlesubmit}
                            className="w-full flex flex-col justify-center items-center m-auto"
                        >
                            <div className="lg:max-w-[600px] w-full flex flex-col justify-center items-center mt-5">
                                <div className="lg:max-w-[600px] w-full">
                                    <InputLabel
                                        htmlFor="name"
                                        value="Name"
                                        className="customtext-black pt-1 mt-1"
                                    />

                                    <TextInput
                                        required
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 w-full h-12 customtext-black border-2 border-blue-950"
                                        autoComplete="name"
                                        onChange={handleOnChange}
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="lg:max-w-[600px] w-full">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                        className="customtext-black pt-1 mt-1"
                                    />

                                    <TextInput
                                        required
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 w-full h-12 customtext-black border-2 border-blue-950"
                                        autoComplete="password"
                                        onChange={handleOnChange}
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="lg:max-w-[600px] w-full">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Email"
                                        className="customtext-black pt-1 mt-1"
                                    />

                                    <TextInput
                                        required
                                        id="email"
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 w-full h-12 customtext-black border-2 border-blue-950"
                                        autoComplete="email"
                                        onChange={handleOnChange}
                                    />  

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="lg:max-w-[600px] w-full">
                                    <InputLabel
                                        htmlFor="role"
                                        value="Role"
                                        className="customtext-black pt-1 mt-1"
                                    />

                                    <SelectOption
                                        required
                                        id="role"
                                        optionData={roleOptionData}
                                        name="role"
                                        value={data.role}
                                        className="mt-1 w-full customtext-black h-12"
                                        autoComplete="role"
                                        onChange={handleOnChange}
                                    />

                                    <InputError
                                        message={errors.role}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center items-center mt-6 w-full">
                                <PrimaryButton
                                    className="w-56 h-14 flex justify-center items-center"
                                    type="submit"
                                    disabled={processing}
                                >
                                    <span className="font-sans">Save</span>
                                </PrimaryButton>
                            </div>
                        </form>
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
