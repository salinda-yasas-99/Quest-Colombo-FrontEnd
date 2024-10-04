import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/counterSlice";
import { Button, Layout } from "antd";
import Navbar from "./components/home/Navbar";
import MainContent from "./components/home/MainContent";

const { Header, Content, Footer } = Layout;

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Header className="home-header">
        <Navbar />
      </Header>
      <Content className="home-content">
        <MainContent />
      </Content>
      <Footer className="home-footer">
        Quest Colombo ©{new Date().getFullYear()} Created by Quest Colombo
      </Footer>
    </Layout>
  );
}

export default App;
