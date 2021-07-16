import Header from "./Header"
import Footer from "./Footer"
import PrependBody from "./PrependBody"

const AppLayout = ({ HeaderProps, FooterProps, children }) => {
  return <>
    <Header {...HeaderProps} />
    <main>{children}</main>
    <Footer {...FooterProps} />
    <PrependBody />
  </>
}

export default AppLayout
