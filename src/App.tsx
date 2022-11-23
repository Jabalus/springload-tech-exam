import { Typography } from "antd";
import React from "react";
import FromScratch from "./container/FromScratch";
import UsingAntd from "./container/UsingAntd";
import { Layout } from "./styles";

function App() {
  const { Title } = Typography;
  return (
    <div className="App">
      <Layout>
        <div className="inner">
          <Title>Contact Form</Title>
          <div className="column">
            <Title level={2}>From Scratch</Title>
            <FromScratch />
          </div>
          <div className="column">
            <Title level={2}>Using Ant Design</Title>
            <UsingAntd />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
