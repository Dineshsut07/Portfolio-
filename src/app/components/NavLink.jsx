import Link from "next/link"


const NavLink = ({href , title}) =>{
    return (
        <Link href={href} className=' p-7 text-[#ADB7BE]  sm:text-xl  md:p-0 hover:text-white border-none rounded-3xl ' >
          {title}
     </Link>
    )
};

export default NavLink;