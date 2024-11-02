import Link from "next/link"
import { title } from "process"

export default function Home(){
  return(
    <>
    <title>Country info</title>
    <h1> Hello : ) </h1>
    <h2>This website is about countries and their related info like name , population and capital.</h2>
    <h2>if you want to see the list of countries click the <Link href="/countrylist">here</Link></h2>
    </>
  )
}