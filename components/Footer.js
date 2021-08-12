import{
    SunIcon,
    MoonIcon,
    ShoppingBagIcon,
    GiftIcon,
    AtSymbolIcon
} from "@heroicons/react/outline";
import FooterItem from "./FooterItem";

function Footer() {
    return (
        <footer className="flex-row lg:flex-grow m-5 justify-between items-center h-auto">
            
            <div className="flex flexbox items-center justify-evenly lg:justify-center">
                <FooterItem title="CONTACT" Icon={AtSymbolIcon} />
                <FooterItem title="SHOP" Icon={ShoppingBagIcon} />
                <FooterItem  title="SUPPORT" Icon={GiftIcon} />  
            </div>

            <p className='text-center text-xs lg:text-base'>
                All rights reserved. Sho Hihara ©︎ 2021
            </p> 

            
        </footer>
    )
}

export default Footer
