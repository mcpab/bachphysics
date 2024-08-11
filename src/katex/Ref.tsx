'use client'

import LargePopup from "../LargePopup";
import { getEquation } from "./KatexPrismaExceptions";
import { useEffect, useState, useMemo } from "react";
import BorderedDiv from "../BorderedDiv";
import { handleError } from "./supportFunction";
import { EquationResult } from "./types";
 

interface RefProps {
    label: string;
    pageName: string;
}

 
export default function Ref({ label, pageName }: Readonly<RefProps>) {
    const [_label, _setLabel] = useState(label);
    const [_html, _setHtml] = useState('');
    const [_pageName, _setPageName] = useState(pageName);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result: EquationResult = await getEquation({ label, pageName });
                _setLabel(result.label);
                _setHtml(result.html);
                _setPageName(result.pageName);
            } catch (error) {
                console.log('error in Ref: ', handleError(error));
                setError('Failed to load equation.');
            } finally {
                setLoading(false);
            }
        })();
    }, [label, pageName]);

    const rt = useMemo(() => {
        if (loading) {
            return <span>Loading...</span>;
        }

        if (error) {
            return <span className="text-red-500">{error}</span>;
        }

        if (_label === '') {
            return <span className="bg-yellow-300 text-red-600">Label {label} not defined</span>;
        }

        const eq = <span dangerouslySetInnerHTML={{ __html: _html }} />;
        const signature = (_pageName + ": " + _label)
            .replace(/-/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase());
           const zoom = <BorderedDiv signature={signature}>{eq}</BorderedDiv>;
 
        return (
            <LargePopup inline={true} zoom={zoom}>
                <span className="underline text-blue-500">{label}</span>
            </LargePopup>
        );
    }, [loading, error, _label, _html, _pageName, label]);

    return <>{rt}</>;
}