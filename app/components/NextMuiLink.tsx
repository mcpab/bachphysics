import * as React from "react";
import MuiLink, { type LinkProps as MuiLinkProps } from "@mui/material/Link";
import { NextLinkLike } from "./NextLinkLike";

export type NextMuiLinkProps = Omit<MuiLinkProps<typeof NextLinkLike>, "component">;

/**
 * MUI-styled link that still uses Next.js routing.
 */
export function NextMuiLink({
    underline = "hover",
    color = "inherit",
    ...props
}: NextMuiLinkProps): React.ReactElement {
    return (
        <MuiLink
            component={NextLinkLike}
            underline={underline}
            color={color}
            {...props}
        />
    );
}

