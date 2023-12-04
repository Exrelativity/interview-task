import "./styles.css";
import { useState, useEffect } from "react";

// project imports;
import { Link, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Read({ auth, page_data }) {
    const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState(page_data ? page_data : auth.user);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            <Head title={data.name} />
            <AuthenticatedLayout
                auth={auth}
            >
                <div className="container">
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="w-full pb-2">
                            <div className="text-center text-3xl">
                                {data.name}
                            </div>
                            <div className="text-center text-sm text-green-700">
                                {data.role}
                            </div>
                            <div className="text-center text-sm">
                                {data.email}
                            </div>
                        </div>
                        <div className="w-full text-center flex flex-row flex-wrap justify-center items-center gap-1">
                            {data.id === auth.user.id && <Link
                                className="w-72 h-14"
                                href={route("user.edit", { id: data.id })}
                            >
                                <PrimaryButton
                                    className="w-full h-full text-center justify-center items-center"
                                    disabled={false}
                                >
                                    <span className="text-lg font-sans">
                                        Edit
                                    </span>
                                </PrimaryButton>
                            </Link>}
                        </div>
                    </div>
                    <hr className="mt-5" />
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div></div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
