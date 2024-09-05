'use client'

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Typography from '@mui/material/Typography';

const BreadMenu: React.FC = () => {


    const pathname = usePathname();

    const pathArray = pathname.split('/').filter(path => path);
    console.log('PathArray:', pathArray);
    console.log('Pathname:', pathname);

    const breadCrumbs = pathArray.map((path, index) => {
        const pathUrl = `/${pathArray.slice(0, index + 1).join('/')}`;
        const isLast = index === pathArray.length - 1;
        console.log('PathUrl:', pathUrl);
        return (
            <Link key={pathUrl} href={pathUrl} className='no-underline text-inherit hover:text-blue-300'>
                {transformString(path)}
            </Link>
        );
    });

 

    const rootLink = (
        <Link key="/" href="/" className='no-underline text-inherit hover:text-blue-300'>
            Home
        </Link>
    );

    return (
        <Breadcrumbs aria-label="breadcrumb"  className='text-sm'>
            {rootLink}
            {breadCrumbs}           
        </Breadcrumbs>
    );
};
 
export default BreadMenu;

const transformString = (str: string): string => {
    const words = str.split('-');
    const transformedWords = words.map((word) => {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        return capitalizedWord;
    });
    const transformedString = transformedWords.join(' ');
    return transformedString;
};

