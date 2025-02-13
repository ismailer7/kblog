'use client';
import { useEffect, useId } from 'react'

import { Button } from '@/components/Button'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeToggle } from './ThemeToggle';
import Prompt from './Prompt';
import { useTheme } from 'next-themes';

export function SignUpForm() {
  let id = useId()
  const [email, setEmail] = useState('')
  const [clientInfo, setClientInfo] = useState({
    emailAddress: '',
    ipAddress: '',
    userAgent: '',
    location: '',
    timezone: '',
    created: '',
    deleted: false,
  });

  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    // Get browser user-agent
    const userAgent = navigator.userAgent;
    const emailAddress = email;
    // Get the timezone of the client
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const created = '';
    const deleted = false;

    // Get the client's location using the Geolocation API (if permission is granted)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setClientInfo((prevState) => ({
            ...prevState,
            location: `${latitude}, ${longitude}`,
          }));
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }

    // Set the gathered client info
    setClientInfo({
      emailAddress,
      ipAddress: '',
      userAgent,
      location: 'N/A',
      timezone,
      created,
      deleted,
    });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    clientInfo.emailAddress = email;
    clientInfo.created = new Date().toLocaleString();
    clientInfo.deleted = false;
    console.log('clientInfo front: ' + clientInfo);

    await toast.promise(
      fetch('/api/addRecord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientInfo),
      })
      .then((res) => {
        if(!res.ok) {
          throw new Error('Email Already Exist!')
        }
        return res.json();
      })
      ,
      {
        pending: 'Thanks for Subscribing..',
        success: 'Email Added to our List 👌',
        error: 'Email Not Added 🤯, Record Already Exist!'
      },
      {theme: otherTheme, position: 'top-left'});

  };

  return (
    <form className="relative isolate mt-8 flex items-center pr-1" onSubmit={handleSubmit}>
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        required
        type="email"
        autoComplete="email"
        name="email"
        id={id}
        placeholder="Email address"
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-hidden sm:text-[0.8125rem]/6"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" arrow>
        Notify Me
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
      <ToastContainer />
    </form>
    
  )
}
