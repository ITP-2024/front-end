'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@/components/gift-box/button';
import { useRouter } from 'next/navigation';
import { FunctionComponent } from "react";

const BuilderMain: FunctionComponent = () => {
    useEffect(() => {
   
        localStorage.clear();
      }, []);
    
    const router = useRouter();

    const createGiftBox = () => {
        router.push('/builder/theme');
    }
    return (
        <div>
            <div className="bg-fuchsia-900 h-[350px]">
                <div className="flex items-center justify-between text-white">
                    <img
                        className="left-[275px] w-[445px] h-[371px] object-cover"
                        alt="box"
                        src="/box.png" />
                    <div className="text-[40px] mr-10 text-white text-center flex items-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] font-league-spartan">
                        <span className="w-full">
                            <p className="m-0 font-semibold">Create Your</p>
                            <p className="m-0 font-semibold">Perfect Gift Box</p>
                            <p className="m-0">
                                <span className="font-semibold">Today</span>
                                <span className="font-semibold font-inter">!</span>
                            </p>
                            <p className="m-0 text-[20px]">
                                <button
                                    type="button"
                                    className="bg-red-600 text-white px-10 py-2 rounded-md mt-5 hover:bg-red-700 w-55 h-17"
                                    onClick={createGiftBox}
                                >
                                    <span className="text-m">Get Started</span>
                                </button>
                            </p>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BuilderMain;