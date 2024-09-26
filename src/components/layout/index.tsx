import Footer from "./footer"
import Navbar from "./navbar"

const Layout = (props: { children: React.ReactNode }) => {

  return <>
    <Navbar />
    <main>{props.children}</main>
    <Footer />
  </>

}

export default Layout
