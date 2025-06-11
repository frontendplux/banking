// components/Header.tsx
export default function Header() {
    return (
      <div className="w-full">
        <div className="bg-[#d1242f]">
          <div className="max-w-[1300px] w-full mx-auto text-white px-6 py-4 flex justify-between items-center">
            <div className="text-3xl font-bold">WELLS FARGO</div>
            <div className="flex items-center gap-4 text-sm">
              <a href="#">ATMs/Locations</a>
              <a href="#">Help</a>
              <a href="#">Español</a>
              <button className="rounded-full bg-white text-[#d1242f] px-5 py-3 font-semibold text-sm">Sign On</button>
            </div>
          </div>
        </div>
  
        {/* Yellow Divider */}
        <div className="h-[3px] bg-yellow-400"></div>
  
        {/* Top Navigation */}
        <div className="bg-gray-50">
          <nav className="max-w-[1300px] w-full mx-auto px-6 py-2 flex gap-6 text-sm font-medium text-gray-800">
            <a href="#" className="text-black font-semibold border-b-2 border-red-500">Personal</a>
            <a href="#">Investing & Wealth Management</a>
            <a href="#">Small Business</a>
            <a href="#">Commercial Banking</a>
            <a href="#">Corporate & Investment Banking</a>
            <a href="#">About Wells Fargo</a>
          </nav>
        </div>
  
        {/* Sub Navigation */}
        <div className="bg-white">
          <nav className="max-w-[1300px] w-full mx-auto px-6 py-2 flex gap-6 text-sm text-gray-700">
            <a href="#">Checking</a>
            <a href="#">Savings & CDs</a>
            <a href="#">Credit Cards</a>
            <a href="#">Home Loans</a>
            <a href="#">Personal Loans</a>
            <a href="#">Auto Loans</a>
            <a href="#">Premier</a>
            <a href="#">Education & Tools</a>
          </nav>
        </div>
      </div>
    );
  }
  