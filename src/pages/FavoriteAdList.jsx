import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

import { Table, Icon, Menu,Button} from "semantic-ui-react";
import FavoriteAdvertisementService from "../Services/favoriteAdvertisement";

export default function FavoriteAdList() {
  const [favorites, setFavorites] = useState([]);

 

  useEffect(() => {
    let favoriteService = new FavoriteAdvertisementService();
    favoriteService
      .getByJobSeekerId(7)
      .then((result) => setFavorites(result.data.data));
  }, []); 

  const deleteToFav = (id) => {
    let favoriteService = new FavoriteAdvertisementService();
   
    console.log(id)
    favoriteService.deleteFav(id);
    
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell > Job Advertisement</Table.HeaderCell>
            <Table.HeaderCell>Company Name </Table.HeaderCell>
            <Table.HeaderCell>Dead line</Table.HeaderCell>
            <Table.HeaderCell> </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {favorites.map((favorites) => (
            <Table.Row key={favorites.id}>
              <Table.Cell> <Link to={`/favorities/${favorites.id}`}>{favorites.jobAdvertisement.description}</Link> </Table.Cell>
              
              <Table.Cell>
                {favorites.jobAdvertisement.employer.companyName}
              </Table.Cell>
              <Table.Cell>{favorites.jobAdvertisement.deadline}</Table.Cell>
              <Table.Cell> 
                {
                  <Button
               
                    onClick={() => deleteToFav(favorites.id)}
                    circular
                    style={{ marginLeft: "0.5em" }}
                    size="large"
                    color="red"
                    icon="delete"
                    inverted
                  ></Button>
                }
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
