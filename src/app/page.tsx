export default function Home() {
  return (
    <div className="bg-white">
      <div className="flex max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pt-5 pb-20 w-full text-xl font-semibold text-black bg-violet-200 border-2 border-fuchsia-800 border-solid">
            <div className="justify-center self-start px-6 py-8 ml-7 whitespace-nowrap rounded-full bg-zinc-300 max-md:px-5 max-md:ml-2.5">
              LOGO
            </div>
            <div className="flex flex-col items-end px-1.5 mt-36 text-white max-md:mt-10">
              <div className="flex gap-5 self-stretch px-4 pt-6 pb-3.5 bg-fuchsia-800 border-2 border-violet-200 border-solid max-md:pl-5">
                <div className="flex-auto">Order Management</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5670c33d54949e463ff2953bdfff14befba752701cd51e9f859e4076a0c72835?"
                  className="shrink-0 self-start aspect-[1.35] fill-white w-[27px]"
                />
              </div>
              <div className="flex gap-5 px-3 py-1.5 max-w-full whitespace-nowrap bg-fuchsia-800 w-[230px]">
                <div className="flex-auto my-auto">Dashboard</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6d4ed68c4fc96a1428f0ff109bd736b04d08a1b1aa979c824d8cb52b257a79?"
                  className="shrink-0 aspect-[0.71] fill-white w-[15px]"
                />
              </div>
              <div className="justify-center px-5 py-2 mt-2 text-black whitespace-nowrap bg-purple-400">
                Complains
              </div>
              <div className="justify-center px-5 py-2.5 mt-2 text-black whitespace-nowrap bg-purple-400">
                Orders
              </div>
            </div>
            <div className="justify-center px-2.5 py-5 mt-11 bg-purple-400 border-2 border-purple-400 border-solid max-md:pr-5 max-md:mt-10 max-md:mr-1 max-md:ml-1.5">
              Inventory Management
            </div>
            <div className="shrink-0 w-72 max-w-full bg-purple-400 border-2 border-violet-200 border-solid h-[57px] max-md:mr-1 max-md:ml-1.5" />
            <div className="justify-center items-start px-3 py-5 w-72 max-w-full bg-purple-400 border-2 border-violet-200 border-solid max-md:pr-5 max-md:mr-1 max-md:ml-1.5">
              Finance Management
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex gap-5 items-start px-10 py-5 text-2xl font-semibold text-black bg-violet-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex-auto mt-3">
                Order Management &gt; Dashboard
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1007b9cdbd9cc03f0808610f14d4ef5f98cecdf637c67e0ca3e1a62ac3ba783?"
                className="shrink-0 aspect-square fill-black fill-opacity-0 w-[33px]"
              />
            </div>
            <div className="flex gap-5 justify-between self-end mt-5 mr-11 text-2xl font-semibold text-black max-md:mr-2.5">
              <div className="flex flex-col justify-center">
                <div className="flex gap-5 justify-between py-2 pr-7 pl-3.5 bg-purple-400 rounded-[30px] max-md:pr-5">
                  <div className="flex gap-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9988e7d5c70ac5e21f346b0e163ade9f0f16c1ccb32c816c631fb04a753acd0?"
                      className="shrink-0 self-start aspect-square fill-black fill-opacity-0 w-[25px]"
                    />
                    <div>|</div>
                    <div>Sort by</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/99f35ebdd6ecb1f3e3e1410a3f60e44754eb38356cf7f25988f05bd10bb7acad?"
                    className="shrink-0 self-start aspect-square fill-black fill-opacity-0 w-[25px]"
                  />
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/367a24ab7a066a4afecbfca01d38128ec566b7e6304a56bd0abae4802beb9516?"
                className="shrink-0 my-auto w-8 aspect-square fill-black fill-opacity-0"
              />
            </div>
            <div className="self-center px-5 mt-32 w-full max-w-[989px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center font-semibold text-black max-md:mt-5">
                    <div className="flex flex-col items-start pt-2.5 pr-20 pb-10 pl-3.5 bg-purple-400 rounded-3xl max-md:pr-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a85b96a26c2c3c46c00693840da6eba5fffe9125cb3f8cc61ef8c334bff3ca09?"
                        className="aspect-[1.2] fill-black w-[30px]"
                      />
                      <div className="mt-4 text-2xl">Total Income</div>
                      <div className="mt-7 text-2xl">2,450,000.00 LKR</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center font-semibold text-black max-md:mt-5">
                    <div className="flex flex-col items-start pt-2 pr-20 pb-12 pl-5 bg-purple-400 rounded-3xl max-md:pr-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/09afcb403e7cc2cb212ed11761391caea1f61650996b8651cca26d1e4810229f?"
                        className="aspect-[1.2] fill-black fill-opacity-0 w-[30px]"
                      />
                      <div className="mt-3 text-2xl">Total Orders</div>
                      <div className="mt-7 text-2xl">124</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center text-2xl font-semibold text-black whitespace-nowrap max-md:mt-5">
                    <div className="flex flex-col items-start pt-2.5 pr-20 pb-14 pl-5 bg-purple-400 rounded-3xl max-md:pr-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/439efb749dc52dd9c3519a881727e6207d85025006b181c5da297ab48d6df606?"
                        className="w-7 aspect-[1.12] fill-black fill-opacity-0"
                      />
                      <div className="mt-2.5">Complains</div>
                      <div className="mt-5">08</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col self-center px-14 py-8 mt-8 w-full font-semibold text-black bg-violet-200 rounded-3xl max-w-[1004px] max-md:px-5 max-md:max-w-full">
              <div className="text-3xl max-md:max-w-full">Order statistic</div>
              <div className="flex gap-5 items-end mt-14 text-xl whitespace-nowrap max-md:flex-wrap max-md:mt-10">
                <div className="flex flex-col flex-1 items-center mt-48 font-bold max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a080442e1d1cc0db8f489763095caf76a0c8c7bc3221b432bc0ba2f64b067e1?"
                    className="aspect-[0.48] fill-fuchsia-800 w-[89px]"
                  />
                  <div className="mt-4">Jan</div>
                </div>
                <div className="flex flex-col flex-1 items-center mt-32 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a02ce0f53fc6139b38d304c97edb554c37ee893cd8b3066e55ac72494b208af3?"
                    className="aspect-[0.35] fill-fuchsia-800 w-[89px]"
                  />
                  <div className="mt-4">Fab</div>
                </div>
                <div className="flex flex-col flex-1 items-center mt-48 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db8eb1f07e96bc2170e87bbef5381a7613b21b4b2a53202565482c143f15879?"
                    className="aspect-[0.47] fill-fuchsia-800 w-[88px]"
                  />
                  <div className="mt-4">Mar</div>
                </div>
                <div className="flex flex-col flex-1 items-center mt-24 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/49901e46d2b49db1334ea2ef3d0b3b4436f524a9f1b6d94506e9aadc4aca5280?"
                    className="aspect-[0.31] fill-fuchsia-800 w-[88px]"
                  />
                  <div className="mt-4">Apr</div>
                </div>
                <div className="flex flex-col flex-1 items-center mt-11 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbf0700ea1d0a1497dcb36025554f39fcce82b1b4fe37ccabe3cfe0f9fe027e?"
                    className="aspect-[0.27] fill-fuchsia-800 w-[88px]"
                  />
                  <div className="mt-4">May</div>
                </div>
                <div className="flex flex-col flex-1 items-center self-stretch">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/617f34e464b21051a897bf930be5f12b6ee6ca0925f45e14358a95add0cb68dc?"
                    className="aspect-[0.23] fill-fuchsia-800 w-[88px]"
                  />
                  <div className="mt-4">June</div>
                </div>
                <div className="flex flex-col flex-1 items-center mt-32 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/865fee12e59570db6b95fa5c003e1915bd465d8b669f3537e4957ed002c4544e?"
                    className="aspect-[0.36] fill-fuchsia-800 w-[88px]"
                  />
                  <div className="mt-2.5">July</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
