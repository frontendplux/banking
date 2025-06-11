export default function Footer(){
 return(
  <footer className="bg-[#f4f0ed] py-6">
    <div className="max-w-[1300px] mx-auto p-2">
      <div className="flex flex-wrap gap-4 text-black-100 text-xs">
      <a href="">Privacy, Cookies, Security & Legal</a> |
      <a href="">Do Not Sell or Share My Personal Information</a> |
      <a href="">Notice of Data Collection</a> |
      <a href="">General Terms of Use</a> |
      <a href="">Online Access Agreement</a> |
      <a href="">Report Fraud</a> |
      <a href="">About Wells Fargo</a> |
      <a href="">Careers</a> |
      <a href="">Diversity and Accessibility</a> |
      <a href="">Sitemap</a>
      </div>
    </div>
    <div className="max-w-[1300px] mx-auto p-2">
      <div className="border-1 py-6 px-3 mt-6 w-[max-content] font-bold">
        <div className="my-3">Investment and Insurance Products are:</div>
        <ul className="pl-5 pe-3">
          <li style={{listStyle:'circle'}}>Not Insured by the FDIC or Any Federal Government Agency</li>
          <li style={{listStyle:'circle'}}>Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate</li>
          <li style={{listStyle:'circle'}}>Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested</li>
        </ul>
      </div>
      <p className="my-5 text-xs">
       Investment products and services are offered through Wells Fargo Advisors. Wells Fargo Advisors is a trade name used by Wells Fargo Clearing Services, LLC (WFCS) and Wells Fargo Advisors Financial Network, LLC, Members SIPC, separate registered broker-dealers and non-bank affiliates of Wells Fargo & Company.
      </p>
      <p className="my-5 text-xs">
      1. Availability may be affected by your mobile carrier’s coverage area. Your mobile carrier’s message and data rates may apply. Fargo is only available on the smartphone versions of the Wells Fargo Mobile® app.
      </p>
      <p className="my-5 text-xs">Android, Google Play, Chrome, Pixel and other marks are trademarks of Google LLC.</p>
      <p className="my-5 text-xs">
      Apple, the Apple logo, Apple Pay, Apple Watch, Face ID, iCloud Keychain, iPad, iPad Pro, iPhone, iTunes, Mac, Safari, and Touch ID are trademarks of Apple Inc., registered in the U.S. and other countries. Apple Wallet is a trademark of Apple Inc. App Store is a service mark of Apple Inc.
      </p>
      <p className="my-5 text-xs">Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.</p>
      <p className="my-5 text-xs">‍Equal Housing Lender</p>
      <p className="my-5 text-xs">PM-09282026-7798034.1.1</p>
      <p className="my-5 text-xs">LRC-0325</p>
      <p className="my-5 text-xs">&copy; 1999 - 2025 Wells Fargo. NMLSR ID 399801</p>
    </div>
  </footer>
 )
}