import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
      
        <div >
            <Menu  pointing vertical  size="large">
        <Menu.Item 
        
        name='Home Page'

        icon ="home"
        />
        <Menu.Item icon="address card outline"
          name="Cv's"
        
        />
        <Menu.Item icon="users"
          name="Job Seeker's"
         
        />
      </Menu>
        </div>
    )
}
