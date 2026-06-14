'use client'
 
import { usePathname } from 'next/navigation'
import { BreadMenuProps, DrawerMenuTree, HeaderLogoProps } from "@mcpab/web-blocks";
import { HeaderDrawer, type DrawerMenuRootProps } from "@mcpab/web-blocks/client";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NextImageAdapter } from '@/src/components/NextImageAdapter';
 

export function SiteMenu() {

    const menuTree:DrawerMenuTree = {
        id:'root',
        type:'root',
        children: [
            {
                id:'home',
                href:'/',
                label:'Home',
                type:'link'
            }
        ]
    }

    const currentPath = usePathname();

    const breadMenu: BreadMenuProps = { pathname: currentPath };

    const drawerProps: DrawerMenuRootProps= {
        currentPath,
        menuTree,
        anchor:'right',
        closeIndicator:<ChevronRightIcon/>,
        openIndicator: <ExpandMoreIcon />,        
    }

    const logoProps:HeaderLogoProps= {
       src: '/img/BachPhysicsLogo.png',
        ImageComponent: NextImageAdapter,
        width: 60,
        height:60
    } 

    return (
        <HeaderDrawer breadMenuProps={breadMenu} drawerProps={drawerProps }  logoProps={logoProps} >

        </HeaderDrawer>
    );

}

export default SiteMenu;
