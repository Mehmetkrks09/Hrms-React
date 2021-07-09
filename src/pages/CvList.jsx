import React, { useState, useEffect } from "react";
import { Table, Icon, Menu } from "semantic-ui-react";
import CvService from "../Services/cvService";

export default function CvList() {
  const [cvs, setCv] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getJobSeekerId(3).then((result) => setCv(result.data.data));
  });

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>firstName</Table.HeaderCell>
            <Table.HeaderCell>lastName</Table.HeaderCell>
            <Table.HeaderCell>Açıklama </Table.HeaderCell>
            <Table.HeaderCell>GitHub</Table.HeaderCell>

            <Table.HeaderCell>LinkedIn</Table.HeaderCell>
            <Table.HeaderCell>Oluşturulma Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cvs) => (
            <Table.Row key={cvs.id}>
              
              <Table.Cell>{cvs.jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{cvs.jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{cvs.description}</Table.Cell>
              <Table.Cell>{cvs.gitHubLink}</Table.Cell> 
              <Table.Cell>{cvs.linkedLink}</Table.Cell>
              <Table.Cell>{cvs.createdDate}</Table.Cell>
          
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
