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

export default function Edit({ auth, page_data, message, ...props }) {
    const [isLoading, setLoading] = useState(true);
    const [pagedata, setPagedata] = useState(page_data);

    useEffect(() => {
        setLoading(false);
    }, []);

    const { data, setData, processing, errors, submit, progress, reset } = useForm(
        "post",
        route("user.update", { id: pagedata.id ?? page_data.id }),
        {
            name: pagedata.name,
            email: pagedata.email,
            role: pagedata.role,
        }
    );

    const roleOptionData = [
        { value: "admin", name: "admin" },
        { value: "regular", name: "regular" },
    ];

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const handlesubmit = (e) => {
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
                title={"Edit " + pagedata.name}
            />
            <AuthenticatedLayout auth={auth}>
                <div className="container">
                    {message && <div className="mb-4 font-medium text-sm text-center w-full items-center justify-center m-auto text-green-600">{message}</div>}
                    <div className="w-full flex flex-col justify-center items-center">
                        <form
                            encType="multipart/form-data"
                            onSubmit={handlesubmit}
                            className="relative w-full flex flex-col justify-center items-center m-auto"
                        >
                            <div className="relative lg:max-w-[600px] w-full flex flex-col justify-center items-center mt-5">
                                <div className="lg:max-w-[600px] w-full">
                                    <InputLabel
                                        htmlFor="name"
                                        value="Name"
                                        className="customtext-black pt-1 mt-1"
                                    />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 w-full h-12 customtext-black"
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
                                <div className="lg:max-w-[600px] w-full">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Email"
                                        className="customtext-black pt-1 mt-1"
                                    />
                                    <TextInput
                                        id="email"
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 w-full customtext-black h-12"
                                        autoComplete="email"
                                        onChange={handleOnChange}
                                    />

                                    <InputError
                                        message={errors.email}
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
