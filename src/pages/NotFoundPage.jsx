import { Link } from "react-router-dom"
import Button from "../components/Button";
import Section from "../components/Section"

const NotFoundPage = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      customPaddings
    >
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h3 className="h3 mb-6">
            404 Not Found
          </h3>
          <Link to="/">
            <Button white>
                Back to Home
            </Button>
          </Link>
        </div>
    </Section>
  )
}

export default NotFoundPage
