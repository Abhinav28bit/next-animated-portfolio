import Link from "next/link"
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navlink = ({link}) => {

    const pathName = usePathname()
    return (
        <motion.div whileHover={{y: -4}}>
        <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>{link.title}</Link>
        </motion.div>
    )
}

export default Navlink