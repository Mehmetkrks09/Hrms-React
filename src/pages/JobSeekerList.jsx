import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Icon, Menu } from "semantic-ui-react";
import JobSeekerService from "../Services/jobSeekerService";

export default function JobSeeker() {
  const [jobSeekers, setJobSeeker] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();

    jobSeekerService
      .getJobSeeker()
      .then((result) => setJobSeeker(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>password</Table.HeaderCell>

            <Table.HeaderCell>Tc Numarası</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihix</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeekers) => (
            <Table.Row key={jobSeekers.id}>
              <Table.Cell><Link to ={`/jobSeeker/${jobSeekers.id}`}>{jobSeekers.firstName}</Link></Table.Cell>
              <Table.Cell>{jobSeekers.lastName}</Table.Cell>
              <Table.Cell>{jobSeekers.email}</Table.Cell>
              <Table.Cell>{jobSeekers.password}</Table.Cell>

              <Table.Cell>{jobSeekers.nationalityId}</Table.Cell>
              <Table.Cell>{jobSeekers.birthYear}</Table.Cell>
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
