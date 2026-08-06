
import { ChevronDown} from "lucide-react";

import { useAuth } from "@/features/auth/hooks/useAuth";

export default function Header() {

  const { user, logout,handleLogout,isOpen, setIsOpen } = useAuth();



  return (
    <header className="flex h-16 items-center justify-end border-b border-slate-200 bg-white px-6">
      <div className="relative w-40">

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between   px-3 py-2 text-xs font-medium focus:outline-none"
        >
        <span className="p-2 bg-black rounded-md  text-white ">
        {user?.fullName
          ?.split(" ")
          .map((name) => name[0])
          .join("")
          .toUpperCase() ?? "K"}
      </span>
          <p className="flex flex-col text-left">
         <span> {user?.fullName ?? "Kullanıcı"}</span>
          <span className="text-gray-400">Yönetici</span>
          </p>

          <ChevronDown
            className={`h-4 w-4 text-slate-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>


        {isOpen && (
          <div className="absolute left-0 right-0   top-full z-50 mt-1 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
          <p className="flex flex-col border-b px-2 py-2 text-left text-xs">
          <span className="text-black"> {user?.fullName ?? "Kullanıcı"}</span>
          <span> {user?.email ?? "Email"}</span>
  
           </p>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2 px-2  py-2 font-bold  text-xs text-black transition hover:bg-slate-50"
            >
        

              <span >Çıkış Yap</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
