function SignOnSection() {
    return (
      <div className="bg-[#f8f5f2]">
      <div className="py-10 flex flex-col lg:flex-row justify-between mx-auto max-w-[1300px] px-6 gap-10">
        
        <div className="bg-white rounded-xl shadow-md pt-6 w-full max-w-[350px]">
          <h2 className="text-xl px-6 font-semibold mb-1">Good evening</h2>
          <p className="text-sm px-6 text-gray-600 mb-4">Sign on to manage your accounts.</p>
  
          <form className="space-y-4 px-6">
            <div>
              <label className="text-sm block">Username</label>
              <input type="text" className="border-b w-full py-1 focus:outline-none" />
            </div>
            <div>
              <label className="text-sm block">Password</label>
              <div className="flex justify-between items-center border-b">
                <input type="password" className="w-full py-1 focus:outline-none" />
                <button type="button" className="text-sm text-blue-800">Show</button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="saveUsername" />
              <label htmlFor="saveUsername" className="text-sm">Save username</label>
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-[#d1242f] text-white rounded-full px-6 py-2 font-semibold text-sm">
                Sign On
              </button>
              <a href="#" className="text-sm text-gray-800 underline">Enroll</a>
            </div>
          </form>
  
          <div className="mt-6 px-6 pb-6 bg-[#f4f0ed] pt-4 text-sm text-gray-600 space-y-1">
            <a href="#" className="block underline">Forgot username or password?</a>
            <a href="#" className="block underline">Security Center</a>
            <a href="#" className="block underline">Privacy, Cookies, and Legal</a>
          </div>
        </div>
  
        {/* Bonus Promo */}
        <div className="flex flex-col justify-center max-w-xl">
          <h2 className="text-4xl font-semibold mb-2">$325 checking bonus on us</h2>
          <p className="text-lg text-gray-700 mb-4">New customers open an eligible checking account with qualifying direct deposits</p>
          <button className="border-2 w-[max-content] border-black rounded-full px-6 py-2 font-semibold hover:bg-black hover:text-white transition">
            Get started &gt;&gt;
          </button>
        </div>
  
        {/* Right Side Promo Box */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="text-center text-pink-700 font-medium text-2xl">
            <div className="border-t-4 border-pink-700 w-14 mx-auto mb-1"></div>
            <div>Enjoy</div>
            <div className="text-5xl font-bold">$325</div>
            <div className="border-b-4 border-pink-700 w-14 mx-auto mt-1"></div>
          </div>
        </div>
      </div>
     </div>
    );
  }

export default function Home() {
    return (
        <>
            <SignOnSection />
            <div className="flex max-w-[1300px] py-9 px-3 mx-auto">
                <div className="p-2 w-[25%]">
                    <div className="p-3 bg-[#faf9f5] rounded-xl shadow">
                        <div className="text-center">
                            <img src="wfi000_ic_b_ui-card_color-gradient_64x64.webp" className="mx-auto" alt="Access Banking" />
                        </div>
                        <h2 className="text-[medium] py-2">
                            Enjoy 0% intro APR for 21 months
                        </h2>
                        <p className="py-2 text-sm">
                           from account opening on purchases and qualifying balance transfers. Terms apply.
                        </p>
                        <p className="py-3"><a href="" className="text-[#5a62c2]">Learn more >> </a></p>
                    </div>
                </div>
                <div className="p-2 w-[25%]">
                    <div className="p-3 bg-[#faf9f5] shadow rounded-xl">
                        <div className="flex justify-center"><img src="creditcard_color_gradient_64x64x.webp" alt="Access Banking" /></div>
                        <h2 className="text-[medium] py-2">
                            Want a $125 checking bonus?
                        </h2>
                        <p className="py-2 text-sm">
                          Open a new Clear Access Banking account and complete the qualifying requirements
                        </p>
                        <p className="py-3 text-[#5a62c2]"><a href="">Learn more >> </a></p>
                    </div>
                </div>
                <div className="p-2 w-[25%] h-full">
                    <div className="p-3 bg-[#faf9f5] shadow rounded-xl">
                        <div className="flex justify-center"><img src="wf_icon_piggybank_rgb_f1_gradient_64x64.avif" alt="Access Banking" /></div>
                        <h2 className="text-[medium] py-2">Open a savings account</h2>
                        <p className="py-2 text-sm">
                          Explore our savings accounts and find the right fit for you
                        </p>
                        <p className="py-3 text-[#5a62c2]"><a href="">Get started >> </a></p>
                    </div>
                </div>
                <div className="p-2 w-[25%]">
                    <div className="p-3 bg-[#ffff] shadow rounded-xl">
                        <h2 className="text-[medium]">Interest rates today</h2>
                        <div className="flex justify-end py-3"><img src="first_time_experience-account_summary.avif" alt="Access Banking" /></div>
                        <p className="py-4 text-[rgb(90,98,194)]"><a href="" >Check rates </a></p>
                    </div>
                </div>
            </div>
            <div className="bg-no-repeat bg-center bg-cover h-[700px] bg-[url(/bilt_hplp_1600x700_card.avif)]">
              <div className="max-w-[1300px] w-full mx-auto py-[100px]">
                  <div className="w-full max-w-[500px] text-white">
                    <h2 className="text-5xl py-4">Finally. Earn points on rent.</h2>
                    <p className="py-6 text-xl">Redeem for travel, rent credit, or even a down payment on a home. Terms apply.</p>
                    <p className="py-5">
                      <a href="" className="bg-white text-black px-9 py-3 rounded-full text-xl">Learn more</a>
                    </p>
                  </div>
              </div>
            </div>
            <div>
                <hr className="mx-auto my-8 w-[100px] border-red-300 border-2" />
                <div className="text-center text-5xl font-light font-normal">‍Financial guidance and support</div>
                <div className="max-w-[1300px] w-full py-6 mx-auto flex">
                  <div className="flex-1/3 p-4">
                    <div className="shadow  rounded-2xl overflow-hidden">
                      <img src="financial-goals_616x353.jpg"  className="w-full h-[250px] object-center object-cover"  alt="financial goal" />
                      <h2 className="py-3 px-3 text-xl font-bold">Your Money. Your Goals. Your Future.</h2>
                      <p className="py-3  px-3 font-light mb-6">Setting financial goals is a powerful first step you can take today</p>
                      <p className="py-5 px-3">
                        <a href="" className="py-3 px-6 rounded-full border-1">Get started</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex-1/3 p-4">
                    <div className="shadow  rounded-2xl overflow-hidden">
                      <img src="wfi_ph_a_380700712-investingmoney_616x353.jpg"  className="w-full h-[250px] object-center object-cover"  alt="financial goal" />
                      <h2 className="py-3 px-3 text-xl font-bold">Take the guess work out of investing</h2>
                      <p className="py-3 px-3 font-light mb-6">Explore your options and see how you can start today</p>
                      <p className="py-5 px-3">
                        <a href="" className="py-3 px-6 rounded-full border-1">Get started</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex-1/3 p-4">
                    <div className="shadow rounded-2xl overflow-hidden">
                      <img src="wfi_ph_hpsp_lifesync_616x353.jpg"  className="w-full h-[250px] object-center object-cover"  alt="financial goal" />
                      <h2 className="py-3 px-3 text-xl font-bold">Move your goals forward</h2>
                      <p className="py-3 px-3 font-light mb-9">Take the next step with LifeSync®</p>
                      <p className="py-6 px-3">
                        <a href="" className="py-3 px-6 rounded-full border-1">Get started</a>
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#464241] to-[#dddddd] h-[600px] overflow-hidden">
              <div className="max-w-[1300px] mx-auto pt-[70px]">
                <div className="flex gap-6">
                  <div><img src="Native_App_Phone_Personal_v11.webp" alt="" /></div>
                  <div className="text-white max-w-[600px] w-full">
                    <h2 className="text-4xl">Need help? Ask Fargo<small>®</small></h2>
                    <div className="text-2xl">
                        Fargo1 gives you valuable insights like a summary of your spending by category, retailer and across accounts. Find it only in the Wells Fargo Mobile® app.
                    </div>
                    <div className="flex gap-2">
                      <a href=""><img src="App_Store_Badge.avif" alt="" /></a>
                      <a href=""><img src="GooglePlay_Badge.avif" alt="" /></a>
                    </div>
                    <p className="py-5">
                      *Screen image is simulated
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}   