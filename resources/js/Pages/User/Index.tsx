import "./styles.css";
import { useState, useEffect } from "react";
// project imports;
import { Link, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
import CustomAdminTable from "@/Components/CustomAdminTable";

export default function Index({ auth, message, ...props }:any) {
    const [isLoading, setLoading] = useState(true);
    const tableData = {
        auth: auth,
        headings: [
            {
                value: "name",
                label: "Name",
            },
            {
                value: "email",
                label: "Email",
            },
            {
                value: "role",
                label: "Role",
            },
        ],
        data: props.page_data.data ? [...props.page_data.data] : [],
        title: "All Users",
        searchURLName: "user.search",
        filterDateURLName: "user.searchdate",
        singleItemDisplayPrefixURLName: "user.show",
        singleItemEditPrefixURLName: "user.edit",
        singleItemDeletePrefixURLName: "user.destroy",
        addNewEntryURLName: "user.create",
        ...props,
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <Head title="All Users" />
            <AuthenticatedLayout
                auth={auth}
            >
                <div className="container">
                    <CustomAdminTable {...tableData} />
                    {props.page_data.data && <Pagination {...props} />}
                </div>
            </AuthenticatedLayout>
        </>
    );
}
