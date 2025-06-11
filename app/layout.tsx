// app/layout.jsx file
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './component/Header';
import Footer from './component/Footerz';

export const metadata: Metadata = {
  title: 'Wells Fargo Bank | Financial Services & Online Banking',
  description: 'Committed to the financial health of our customers and communities. Explore bank accounts, loans, mortgages, investing, credit cards &amp; banking services»',
  keywords:"appointment, make an appointment, online banking, open account, book appointment, contact, statements, new account, payment, sign up, change password, contact us, enroll, login, create account, account, make payment, my account, change password for login, account summary, enroll account for online access, sign in, mobile banking, password, english, wells fargo, balance, log in, pay bills, register, create an account, sign on, online statements, full site, home, wellsfargo.com, personal, wells fargo online, covid, covid 19 hardship, covid 19 relief, covid-19, covid 19",
  icons: {
    icon: '/f.png',
  },
}
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className='p-0'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}