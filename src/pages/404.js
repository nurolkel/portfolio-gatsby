import * as React from "react"
import { PageContainer } from "../components/Container"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <PageContainer>
    <Seo title="404: Not found" />
    <h1 className="text-blue fs-600 letter-spacing-3 text-bold uppercase">404: Not Found</h1>
    <p className="fs-500 text-light-grey letter-spacing-2 uppercase">You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageContainer>
)

export default NotFoundPage
