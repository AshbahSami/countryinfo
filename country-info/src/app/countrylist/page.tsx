import Link from "next/link";

export default function Countrylist(){
    return(
        <div>
            <h1>Country List</h1>
            <ul>
                <li><Link href ='countrylist/pakistan'>Pakistan</Link></li>
                <li><Link href ='countrylist/india'>India</Link></li>
            </ul>
        </div>
    )
}