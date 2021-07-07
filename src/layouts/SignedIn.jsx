import React from 'react'
import { Dropdown, Menu,Image,Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default function SignedIn(props) {
    return (
        <div>
            
      <Menu.Item>
      <Button primary  style={{marginRight:"0.5em"}}as={Link} to={"/JobAdd"}>
              İş Ekle
            </Button>

          <Image avatar spaced="right" src="https://lh3.googleusercontent.com/ogw/ADea4I4TgIjgTAHhSUiSzfiCrKPSx4xthwaStj2FxeRXYzg=s83-c-mo "/>
         <Dropdown
          pointing="top left" 
          text="Mehmet">
             
             <Dropdown.Menu>
                 <Dropdown.Item text="Bilgilerim" icon="info"/>

                 <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
             </Dropdown.Menu>
         </Dropdown>
         
          
      </Menu.Item>
        </div>
    )
}
