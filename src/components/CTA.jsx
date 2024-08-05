import Link from "next/link";
import React from "react";

const CTA = () => {
    return (
        <div className='cta'>
            <p className='text-black-500 font-extrabold flex-1 text-2xl max-md:text-center'>
                Have a project in mind? <br className='sm:block hidden' /> Let´s
                build something together!
            </p>
            <Link href='./Contact' className='btn'>
                <p>Contact</p>
            </Link>
        </div>
    );
};

export default CTA;
