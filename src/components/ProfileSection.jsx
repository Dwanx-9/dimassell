import Image from "next/image"
const ProfileSection = () => {
    return (
        <div class="group flex items-center">
        <img class="shrink-0 h-12 w-12 rounded-full" src="https://i.gifer.com/Qaf1.gif" alt="" />
        <div class="ltr:ml-3 rtl:mr-9">
          <p class="text-sm font-medium text-slate-300 group-hover:text-white">Dimassell</p>
          <p class="text-sm font-medium text-slate-500 group-hover:text-slate-300">Full Stuck</p>
        </div>
      </div>
    )
}

export default ProfileSection