import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
import { Button, Card, Image } from "semantic-ui-react";
import JobSeekerService from "../Services/jobSeekerService";

export default function JobSeekerDetail() {
  // let { id } = useParams();

  const [jobSeekers, setJobSeeker] = useState({});

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getById(2)
      .then((result) => setJobSeeker(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />

            <Card.Meta>{jobSeekers.firstName}</Card.Meta>
            <Card.Header>{jobSeekers.lastName}</Card.Header>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
