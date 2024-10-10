import "./App.css";
import { Layout } from "antd";
import Navbar from "./components/home/Navbar";
import MainContent from "./components/home/MainContent";
import FooterContainer from "./components/home/FooterContainer";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header className="home-header">
        <Navbar />
      </Header>
      <Content className="home-content">
        <MainContent />
      </Content>
      <Footer className="home-footer">
        <FooterContainer />
      </Footer>
    </Layout>
  );
}

export default App;
