import Image from "next/image";

import Link from 'next/link';




export default function Cart(){
return (
  
    <div className="flex flex-col pb-20 bg-white">
    
    <div className="w-full bg-purple-400 min-h-[38px] max-md:max-w-full" />
    <div className="flex flex-col self-center mt-36 w-full max-w-[1294px] max-md:mt-10 max-md:max-w-full">
      <div className="text-4xl font-bold text-black max-md:max-w-full">
        shopping cart
      </div>
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-8 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 max-w-full aspect-square w-[209px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-5 mt-1.5 text-black max-md:mt-10">
                      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                        <div className="text-4xl font-bold leading-7">
                          
                        </div>
                        <div className="mt-7 text-4xl font-bold"></div>
                        <div className="flex gap-5 justify-between mt-24 w-full max-md:mt-10">
                          <div className="flex gap-5 justify-between">
                            <div className="my-auto text-3xl font-medium">
                              qty:{" "}
                            </div>
                            <div className="flex gap-5 justify-between items-start px-5 py-3.5 text-xs font-black leading-3 whitespace-nowrap rounded-xl border border-solid border-neutral-400 border-opacity-20 max-md:px-5">
                            <button className="self-stretch my-auto">-</button>
                              <div className="text-sm font-bold leading-5 text-center">
                                1
                                <button>+</button>
                              </div>
                            
                            </div>
                          </div>
                          <div className="self-start text-xs leading-5">
                            {" "}
                            In stock
                          </div>
                        </div>
                      </div>
                      <div className="self-start mt-4 text-4xl">x</div>
                    </div>
                  </div>
                </div>
              </div>
              
                
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
            <div>
    <Link href="members">
      <button className="justify-center py-5 pr-20 pl-16 mx-6 text-3xl font-bold text-white bg-fuchsia-800 rounded-xl tracking-[7.5px] max-md:pr-8 max-md:pl-7 max-md:mr-2.5 max-md:max-w-full">
        Share my cart
      </button>
    </Link>
  </div>
              <div className="flex flex-col px-6 pt-20 pb-8 mt-16 bg-violet-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-xl font-medium text-black max-md:mt-10">
                        <div>subtotal:</div>
                        <div className="mt-9">estimated shipping:</div>
                        <div className="mt-8 font-bold">total:</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-xl font-medium text-black whitespace-nowrap max-md:mt-10">
                        <div>$1,120.00</div>
                        <div className="self-end mt-8">$0.00</div>
                        <div className="mt-8 font-bold">$1,120.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="items-center px-16 pt-5 pb-7 mt-9 text-3xl font-semibold text-white whitespace-nowrap bg-fuchsia-800 rounded-xl tracking-[7.5px] max-md:px-5 max-md:max-w-full">
                  checkout
                </button>
                <button className="px-16 pt-4 pb-7 mt-10 text-3xl font-semibold text-white bg-fuchsia-800 rounded-xl tracking-[7.5px] max-md:pr-6 max-md:pl-6 max-md:max-w-full">
                  Order summary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );

}

 
