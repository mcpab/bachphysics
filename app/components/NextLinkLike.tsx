import * as React from "react";
import NextLink from "next/link";
import type { LinkTypeComponent } from "@mcpab/web-blocks";

/**
 * Adapts Next.js routing to the anchor-like link contract used by shared UI.
 */
export const NextLinkLike: LinkTypeComponent = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<"a">
>(function NextLinkLike({ href, ...props }, ref) {
    if (!href) {
        return <a ref={ref} {...props} />;
    }

    return <NextLink ref={ref} href={href} {...props} />;
});

