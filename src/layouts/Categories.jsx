import {React} from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function Categories() {
    return (
      
        <div >
            <Menu  pointing vertical  size="large">
        <Menu.Item  as={Link} to={"/"}
     
        name='Home Page'

        icon ="home"
        />
        <Menu.Item  as={Link} to={"/cvList"}
        icon="address card outline"
          name="Cv's"
        
        />
        <Menu.Item  as={Link} to={"/jobSeeker"}
         icon="users"
          name="Job Seeker's"
         
        />

<Menu.Item  as={Link} to={"/cvAdd"}
         icon="address card"
          name="Cv Add"
         
        />

        
<Menu.Item  as={Link} to={"/photoUpdate"}
         icon=" image"
          name=" Update Photo"
         
        />
      </Menu>
        </div>
    )
}
