'use client';

import { siteMenuTree } from '@/app/navigation/siteMenuTree';
import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { BreadMenuProps, HeaderLogoProps } from '@mcpab/web-blocks';
import { HeaderDrawer, type DrawerMenuRootProps } from '@mcpab/web-blocks/client';
import { usePathname } from 'next/navigation';
import { NextLinkLike } from './NextLinkLike';
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
export function SiteMenu(): React.ReactElement {
    const currentPath = usePathname();

    const breadMenu: BreadMenuProps = {
        pathname: currentPath,
        linkComponent: NextLinkLike,
    };

    const drawerProps: DrawerMenuRootProps = {
        currentPath,
        menuTree: siteMenuTree,
        anchor: 'right',
        LinkComponent: NextLinkLike,
        closeIndicator: <ChevronRightIcon color="primary" />,
        openIndicator: <ExpandMoreIcon />,
        menuButtonProps: {
            sx: { color: 'primary.main' },
        },
        treeOverrides: {
            link: {
                home: {
                    iconProps: {
                        sx: {
                            color: 'primary.main',
                            minWidth: 36,
                        },
                    },
                },
                about: {
                    iconProps: {
                        sx: {
                            color: 'primary.main',
                            minWidth: 36,
                        },
                    },
                },
                contact: {
                    iconProps: {
                        sx: {
                            color: 'primary.main',
                            minWidth: 36,
                        },
                    },
                },
                colophon: {
                    icon: <DescriptionOutlinedIcon />,
                    iconProps: {
                        sx: {
                            color: "primary.main",
                            minWidth: 36,
                        },
                    },
                },
            },
        },
    };

    const logoProps: HeaderLogoProps = {
        src: '/img/BachPhysicsLogo.png',
        ImageComponent: NextImageAdapter,
        width: 60,
        height: 60,
    };

    return (
        <HeaderDrawer
            breadMenuProps={breadMenu}
            drawerProps={drawerProps}
            logoProps={logoProps}
            appBarProps={{
                elevation: 0,
                sx: {
                    bgcolor: 'background.default',
                    color: 'text.primary',
                },
            }}
        />
    );
}

export default SiteMenu;
