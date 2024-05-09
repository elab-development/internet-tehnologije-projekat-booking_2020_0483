'use client';

import React, {useEffect} from "react";
import EmptyState from "@/app/components/EmptyState";
import Link from "next/link";
import Container from "@/app/components/Container";

interface ErrorStateProps {
    error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({error}) => {

    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <EmptyState
            title="Uh Oh"
            subtitle="Something went wrong!"
            showReset
            labelForReset={"Go back to home page"}
        />
    );
}

export default ErrorState