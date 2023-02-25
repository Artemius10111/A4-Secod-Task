import AppRoutes from '../components/Routes';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import "./../styles/mainPage.css";

const { Header, Content, Footer } = Layout;

function Main(): JSX.Element {
  return (
    <div className="Main">
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
          <Link to={`/`}>
            <p>На главную</p>
          </Link>
          <Link to={`/news`}>
            <p>Новости</p>
          </Link>
          <Link to={`/profile`}>
            <p>Профиль</p>
          </Link>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginBottom: "50px", marginTop: "50px" }}>
            <AppRoutes/>   
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: "antiquewhite"}}>
          <Link to={`https://github.com/Artemius10111?tab=repositories`}>
            GitHub - Artemius10111
          </Link>
        </Footer>
      </Layout>
    </div>
  )
}

export default Main;