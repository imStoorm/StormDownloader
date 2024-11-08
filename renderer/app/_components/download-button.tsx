"use client"

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadButton = ({format, type, link, match}) => {
    return (
        <Button className='w-[60px] bg-[#b3dbdb] rounded-xl' disabled={link === '' || format === '' || type === '' || !match}>
            <Download color='#1c2424'/>
        </Button>
    );
}
 
export default DownloadButton