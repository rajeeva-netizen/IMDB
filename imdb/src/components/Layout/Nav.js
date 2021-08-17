import 'antd/dist/antd.css';
import { Menu } from 'antd';

// horizontal menu bar is used from ant design third party component 

const Nav = () =>{
    return(
        <>
        
        <Menu mode="horizontal" >
             <Menu.Item key="mail">
                <i className="fab fa-imdb fa-4x" id="imdb-logo" />
            </Menu.Item>
        </Menu>  
        </>

    )
}

export default Nav