import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex gap-5 justify-between px-16 py-2.5 w-full bg-violet-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center text-2xl font-semibold text-black max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28c1b24643f8410824c30aaacf778df6a3786e9a3dad3fbb677ab9bd5be3b143?"
          className="shrink-0 self-stretch aspect-square w-[81px]"
        />
        <div className="self-stretch my-auto">Women</div>
        <div className="self-stretch my-auto">Men</div>
        <div className="self-stretch my-auto">Kids</div>
        <div className="self-stretch my-auto">Gift Box</div>
      </div>
      <div className="flex gap-5 justify-between my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/50af8dae8bb647e3cfa3c711914395ccfa9345f6007b7e21088b0dadee0c10f4?"
          className="shrink-0 aspect-square fill-black w-[30px]"
        />
        <img
          loading="lazy"
          src="/image1.png" 
          className="shrink-0 aspect-square fill-black w-[30px]"
        />
        <Link href="/CartManagement/cartUI" passHref>
        <button>
        <img
          loading="lazy"
          src="/image2.png" 
          className="shrink-0 aspect-square fill-black w-[30px]"
        />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
