'use client';

import React from "react";
import {useRouter} from "next/navigation";
import Heading from "@/app/components/Heading";
import Button from "@/app/components/Button";

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
    labelForReset?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
                                                   title = "No exact matches",
                                                   subtitle = "Try changing or removing some of your filters",
                                                   showReset,
                                                   labelForReset = "Remove all filters"
                                               }) => {

    const router = useRouter();

    return (
        <div data-test={'empty-state'} className="h-[60vh] flex flex-col gap-2 justify-center items-center">
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            <div className="w-48 mt-4">
                {showReset && (
                    <Button
                        outline
                        label={labelForReset}
                        onClick={() => router.push("/")}
                    />
                )}
            </div>
        </div>
    )
}

export default EmptyState