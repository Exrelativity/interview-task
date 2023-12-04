
import "./styles.css";
import React, {useState, useEffect} from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({page_data, ...props}) {
const [pageData, setPageData] = useState();
useEffect(() => {
    setPageData(pageData => page_data)
}, [page_data]);
    return (
        <div className="relative flex justify-center center py-5 mt-5 mx-auto">
            <div className="pagination">
                {pageData && <Link className="link" href={pageData.first_page_url}>«</Link>}
                {pageData && <Link className="link" href={pageData.prev_page_url}>prev</Link>}
                {pageData?.current_page && <div className="link">{pageData.current_page} of {pageData.last_page}</div>}
                {pageData && <Link className="link" href={pageData.next_page_url}>next</Link>}
                {pageData && <Link className="link" href={pageData.last_page_url}>»</Link>}
            </div>
        </div>
    );
}
