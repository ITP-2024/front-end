import Link from 'next/link';

export default function Page() {
    return (
    <div className="container mx-auto">
    <h1 className="text-3xl font-bold text-center">Share My Cart</h1>
    <div className="flex justify-center items-center mt-8">
    <div className="self-stretch flex flex-row items-start justify-center gap-[141px] max-w-full text-xl lg:gap-[141px_70px] mq450:gap-[141px_18px] mq750:gap-[141px_35px] mq1050:flex-wrap">
      <div className="flex-1 bg-thistle flex flex-col items-start justify-start pt-[23px] px-[21px] pb-[181px] box-border gap-[36px] min-w-[318px] max-w-full mq450:gap-[18px_36px] mq450:pt-5 mq450:pb-[118px] mq450:box-border mq1050:flex-1">
        <div className="w-[489px] h-[426px] relative bg-thistle hidden max-w-full" />
        <div className="w-[420px] h-[86px] flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="w-[238px] relative leading-[21px] flex items-center z-[1] mq450:text-base mq450:leading-[17px]">
            <span className="w-full">
              <span>{`Email Address `}</span>
              <span className="text-tomato">*</span>
            </span>
          </div>
          <div className="self-stretch h-[45px] rounded-md bg-white box-border flex flex-row items-start justify-start py-[11px] px-3 z-[1] border-[1px] border-solid border-lightgray">
            <input
              className="w-[116.1px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-[21px] relative leading-[21px] text-gray text-left flex items-center whitespace-nowrap p-0"
              placeholder="swoo@gmail.com"
              type="text"
            />
          </div>
        </div>
        <div className="w-[296px] relative leading-[21px] flex items-center z-[1] mq450:text-base mq450:leading-[17px]">
          <span className="w-full">
            <span>{`Phone Number `}</span>
            <span className="text-dimgray">(Optional)</span>
          </span>
        </div>
        <div className="w-[422px] h-[45px] rounded-md bg-white box-border flex flex-row items-start justify-start py-[11px] px-3 max-w-full z-[1] border-[1px] border-solid border-lightgray">
          <input
            className="w-[121.5px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-[21px] relative leading-[21px] text-gray text-left flex items-center whitespace-nowrap p-0"
            placeholder="+1 0231 4554 452"
            type="text"
          />
        </div>
      </div>
      <div className="flex-[0.7852] bg-thistle flex flex-col items-start justify-start pt-5 px-[69px] pb-[218px] box-border gap-[35px] min-w-[318px] max-w-full mq450:gap-[17px_35px] mq450:pl-5 mq450:pr-5 mq450:pb-[142px] mq450:box-border mq1050:flex-1">
        <div className="w-[489px] h-[426px] relative bg-thistle hidden max-w-full" />
        <div className="w-[238px] relative leading-[21px] flex items-center z-[1] mq450:text-base mq450:leading-[17px]">
          <span className="w-full">
            <span>{`Give access to `}</span>
            <span className="text-tomato">*</span>
          </span>
        </div>
        <div className="w-64 flex flex-col items-start justify-start gap-[34px] mq450:gap-[17px_34px]">
          <div className="w-[150.1px] flex flex-row items-start justify-start gap-[7px]">
            <input className="m-0 h-[17.5px] w-3.5" type="checkbox" />
            <div className="flex-1 relative leading-[21px] z-[1] mq450:text-base mq450:leading-[17px]">
              Add to cart
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
            <input className="m-0 h-[17.5px] w-3.5" type="checkbox" />
            <div className="flex-1 relative leading-[21px] z-[1] mq450:text-base mq450:leading-[17px]">
              View cart only
            </div>
          </div>
        </div>
        <div className="w-[270px] flex flex-row items-start justify-start gap-[7px]">
          <input className="m-0 h-[17.5px] w-3.5" type="checkbox" />
          <div className="flex-1 relative leading-[21px] z-[1] mq450:text-base mq450:leading-[17px]">
            Edit cart items
          </div>
        </div>
      </div>
    </div>
    <div className="w-[1098px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
    <button className="cursor-pointer [border:none] py-6 px-[62px] bg-darkmagenta w-[212px] rounded-3xs flex flex-row items-start justify-start box-border hover:bg-mediumorchid">
      <div className="flex-1 relative text-xl leading-[18px] uppercase font-medium font-inter text-white text-center mq450:text-base mq450:leading-[14px]">
        Share
      </div>
    </button>
  </div>
    </div>
</div>
);
  }