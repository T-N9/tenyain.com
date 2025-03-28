import {Ubuntu, Unbounded, Ubuntu_Mono, Chakra_Petch, Audiowide} from "next/font/google";

export const ubuntu = Ubuntu({ weight: ['300','400', '500', '700'], subsets: ['latin'], fallback : ["MyanmarSanpya"] })
export const ubuntu_mono = Ubuntu_Mono({ weight: ['400', '700'], subsets: ['latin'], fallback : ["MyanmarSanpya"] })
export const unbounded = Unbounded({ weight : ["800"],subsets: ['latin']});
export const audiowide = Audiowide({ weight : ["400"],subsets: ['latin']});
export const chakra_petch = Chakra_Petch({ weight : ["300" , "400" , "500" , "700" , "600"],subsets: ['latin']});
