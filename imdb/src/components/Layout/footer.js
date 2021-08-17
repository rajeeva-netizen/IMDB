import 'antd/dist/antd.css';
import { Layout} from 'antd';
const {Footer} = Layout

//Footer is used from ant design third party component

const foot = ()=>{
    return(
        <Footer style={{ textAlign: 'center', margin:'330px 0 0 0' }}>Movie search ©2021 Created by Rajeeva</Footer>
    )
}

export default foot