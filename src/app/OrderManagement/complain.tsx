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
        <div className="max-h-[100px] overflow-y-auto">
          <table className="w-full table-auto ">
            <thead>
              <tr>
                <th className="sticky top-0 bg-white text-black z-10">ID</th>
                <th className="sticky top-0  z-10">Name</th>
                <th className="sticky top-0  z-10">Age</th>
                <th className="sticky top-0  z-10">City</th>
                <th className="sticky top-0  z-10">Heading 5</th>
                <th className="sticky top-0  z-10">City</th>
                <th className="sticky top-0  z-10">Heading 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
              </tr>
              <tr>
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
              </tr>
              <tr>
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
              </tr>
              <tr>
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
              </tr>
              <tr>
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
              </tr>
              <tr>
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
              </tr>
              <tr>
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
