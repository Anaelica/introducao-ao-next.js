// import Page from "@/server-client/page";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar links={
        [
          {label:'Inicio', href:'/'},
          {label:'Sobre nós', href:'./about'},
          {label:'Produtos', href:'/produtos'}
        ]
      }/>
    <div className="">
      <div className="mt-10 ">
      {/* <Page/> */}
      </div>
    </div>
      </>
  )
}