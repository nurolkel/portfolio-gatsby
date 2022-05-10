import React from "react";
import { Link } from "gatsby";
import { BreadcrumbsWrapper, BreadContent } from "./Container";


const BreadCrumb = ({ page }) => {
    return (
        <BreadcrumbsWrapper>
            <BreadContent>
                <Link to="/projects" className="fs-400 text-purple">Projects</Link>
                <span className="text-light-grey span"><span className="sr-only">Click Projects to go back to the Projects Page</span> ← </span>
                <span className="text-purple fs-400">{page}</span>
            </BreadContent>
        </BreadcrumbsWrapper>

    )
}

export default BreadCrumb;
