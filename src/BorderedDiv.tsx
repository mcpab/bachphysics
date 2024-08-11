import React from 'react';

export default function BorderedDiv({ signature, children }: Readonly<{ signature?: string; children: React.ReactNode }>) {
    return (
        <div className='border-solid rounded border-2 border-neutral-100 p-5 flex flex-col' {...(signature ? { id: signature } : {})}>
            {signature && (
                <p className='text-sm float-left pt-0 pr-2 mt-[-30px] mr-0 mb-0 ml-[10px] bg-inherit'>
                    {signature}
                </p>
            )}
            {children}
        </div>
    );
}