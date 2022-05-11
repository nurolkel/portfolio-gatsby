
import Layout from "./src/components/Layout";
import GlobalStyle from "./src/styles/GlobalStyles";

export const wrapRootElement = ({ element }) => (
    <React.Fragment>
        <GlobalStyle />
        {element}
    </React.Fragment>
)

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>
        {element}
    </Layout>
)