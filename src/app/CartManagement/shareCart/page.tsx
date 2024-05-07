'use client';
import * as React from "react";
import { useState, useEffect } from "react";
import Header from '@/components/common/header';

const DynamicForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    accessType: ''
  });

  const [errors, setErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    phoneError: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = '';
    if (name === "firstName" || name === "lastName") {
      if (!/^[A-Za-z ]+$/.test(value)) {
        error = 'Only letters and spaces are allowed';
      }
    }
    setErrors(prevState => ({
      ...prevState,
      [`${name}Error`]: error
    }));
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.emailAddress.includes('@') || !(formData.emailAddress.includes('.com') || formData.emailAddress.includes('.lk'))) {
      setErrors(prevState => ({
        ...prevState,
        emailError: 'Valid email must be added'
      }));
      return;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setErrors(prevState => ({
        ...prevState,
        phoneError: 'Phone number should contain exactly 10 numbers'
      }));
      return;
    }

    if (formData.firstName.trim() === '') {
      setErrors(prevState => ({
        ...prevState,
        firstNameError: 'First name is required'
      }));
      return;
    }

    if (formData.lastName.trim() === '') {
      setErrors(prevState => ({
        ...prevState,
        lastNameError: 'Last name is required'
      }));
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/addShareCartMembers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Data saved successfully');
        setSuccessMessage('Data saved successfully');
        setFormData({
          firstName: '',
          lastName: '',
          emailAddress: '',
          phoneNumber: '',
          accessType: ''
        });
      } else {
        console.error('Failed to save data');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
    }
  };

  useEffect(() => {
    // This effect will only run on the client side
  }, []);

  return (
    <div className="flex flex-col pb-10 bg-white">
      <Header />
      <div className="w-full bg-purple-400 min-h-[38px] max-md:max-w-full" />
      <div className="self-center mt-9 text-4xl font-bold leading-7 text-black capitalize">
        Share my cart
      </div>
      <div className="flex flex-col self-center px-5 mt-24 w-full max-w-[1222px] max-md:mt-10 max-md:max-w-full">
        <div className="text-4xl font-bold leading-7 text-black capitalize max-md:max-w-full">
          Add new member
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col px-16 py-12 mt-11 bg-violet-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 px-px max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col flex-1 self-start text-xl leading-5 text-black max-md:max-w-full">
                <div className="self-start ml-2.5">First name</div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`shrink-0 mt-4 bg-white rounded-md border border-solid border-stone-300 h-[45px] max-md:max-w-full ${errors.firstNameError ? 'border-red-500' : 'border-stone-300'}`}
                />
                {errors.firstNameError && <div className="text-red-500">{errors.firstNameError}</div>}
                <div className="mt-10 max-md:max-w-full">Last name</div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`shrink-0 mt-4 bg-white rounded-md border border-solid border-stone-300 h-[45px] max-md:max-w-full ${errors.lastNameError ? 'border-red-500' : 'border-stone-300'}`}
                />
                {errors.lastNameError && <div className="text-red-500">{errors.lastNameError}</div>}
              </div>
              <div className="flex flex-col flex-1 items-end max-md:max-w-full">
                <div className="text-xl leading-5 text-red-600 max-md:max-w-full">
                  Give access to <span className="text-red-600">*</span>
                </div>
                <div className="flex flex-col items-end mt-12 max-md:pr-5 max-md:mt-10 max-md:max-w-full text-black">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="accessType"
                      value="View only"
                      onChange={handleChange}
                    />
                    View only
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="accessType"
                      value="Add items"
                      onChange={handleChange}
                    />
                    Add items
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="accessType"
                      value="Edit items"
                      onChange={handleChange}
                    />
                    Edit items
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-7 max-w-full w-[666px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-xl leading-5 max-md:mt-8 max-md:max-w-full">
                    <div className="text-red-600 max-md:max-w-full">
                      Email Address <span className="text-red-600">*</span>
                    </div>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className={`shrink-0 mt-7 bg-white rounded-md border border-solid border-stone-300 h-[45px] max-md:max-w-full ${errors.emailError ? 'border-red-500' : 'border-stone-300'}`}
                    />
                    {errors.emailError && <div className="text-red-500">{errors.emailError}</div>}
                    <div className="mt-10 text-stone-500 max-md:max-w-full">
                      Phone Number{" "}
                      <span className="text-stone-500">(Optional)</span>
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`shrink-0 mt-6 bg-white rounded-md border border-solid border-stone-300 h-[45px] max-md:max-w-full ${errors.phoneError ? 'border-red-500' : 'border-stone-300'}`}
                    />
                    {errors.phoneError && <div className="text-red-500">{errors.phoneError}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
          </div>
        </form>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );

}

export default DynamicForm;
