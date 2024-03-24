"use client";

import Card from "./card";
import SearchBar from "./searchbar";
const Complain = () => {
  return (
    <div className="ml-[320px] mt-[100px]">
      <SearchBar title="Search Complain....." />
      <div className="flex justify-start mt-[50px] gap-4">
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          }
          title="Solved "
          value="19"
        />
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          }
          title="Pending"
          value="03"
        />
      </div>
      <div className="flex flex-col gap-4 mt-[50px] mr-[20px] ">
        <div className="max-h-[200px] overflow-y-auto">
          <table className="w-full table-auto ">
            <thead>
              <tr className="h-12 ">
                <th className="sticky top-0 bg-fuchsia-800 ">Complain ID</th>
                <th className="sticky top-0 bg-fuchsia-800">Order ID</th>
                <th className="sticky top-0 bg-fuchsia-800">Customer Mail</th>
                <th className="sticky top-0 bg-fuchsia-800">Complain Type</th>
                <th className="sticky top-0 bg-fuchsia-800">Complain Status</th>
                <th className="sticky top-0 bg-fuchsia-800">
                  Complain Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-12 text-center">
                <td className="bg-zinc-300 text-black">1024</td>
                <td className="bg-zinc-300 text-black">984AhB</td>
                <td className="bg-zinc-300 text-black">saneef1231@gmail.com</td>
                <td className="bg-zinc-300 text-black">Exchange</td>
                <td className="bg-zinc-300 text-black">Processing</td>
                <td className="bg-zinc-300 text-black">
                  The color was mistake
                </td>
              </tr>
              <tr className="h-12 text-center">
                <td className="bg-zinc-400 text-black">4302</td>
                <td className="bg-zinc-400 text-black">5784AQ</td>
                <td className="bg-zinc-400 text-black">saheel87@gmail.com</td>
                <td className="bg-zinc-400 text-black">Refund</td>
                <td className="bg-zinc-400 text-black">Pending</td>
                <td className="bg-zinc-400 text-black">
                  The item was different
                </td>
              </tr>
              <tr className="h-12">
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
              </tr>
              <tr className="h-12">
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
              </tr>
              <tr className="h-12">
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
              </tr>
              <tr className="h-12">
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
              </tr>
              <tr className="h-12">
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Complain;
