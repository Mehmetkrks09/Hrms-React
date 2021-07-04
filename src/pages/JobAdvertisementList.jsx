import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {
  Table,
  Icon,
  Menu,
  Button,
  Card,
  Label,
  Form,
  Dropdown,
} from "semantic-ui-react";
import {
  addToFavorites,
  removeFromFavorites,
} from "../Store/Actions/FavoriteActions";
import JobAdvertisementService from "../Services/jobAdvertisementService";
import { addToCart } from "../Store/Actions/CartActions";
import JobSeekerService from "../Services/jobSeekerService";
import WaysOfWorkService from "../Services/WaysOfWorkService";
import WorkingTimeService from "../Services/WorkingTimeService";
import CityService from "../Services/cityService";
import FavoriteAdvertisementService from "../Services/favoriteAdvertisement";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisement] = useState([]);
  const dispatch = useDispatch();
  const [jobSeekers, setJobSeeker] = useState([]);
  const [cities, setCities] = useState([]);
  const [wayOfWorking, setWayOfWorking] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    let jobSeekerService = new JobSeekerService();
    let wayOfWorkingService = new WaysOfWorkService();
    let cityService = new CityService();

    jobSeekerService
      .getById(2)
      .then((result) => setJobSeeker(result.data.data));
    jobAdvertisementService
      .getAllJobAdvertisement()
      .then((result) => setJobAdvertisement(result.data.data));
    wayOfWorkingService
      .getAll()
      .then((result) => setWayOfWorking(result.data.data));
    cityService.getAll().then((result) => setCities(result.data.data));
  }, []);

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const wayOfWorkingOption = wayOfWorking.map((workType, index) => ({
    key: index,
    text: workType.working,
    value: workType.id,
  }));
  const formik = useFormik({
    initialValues: {
      cityId: "",
      wayOfWorkingId: "",
    },
    onSubmit: (values) => {
      let jobAdvertisementService = new JobAdvertisementService();
      if (values.cityId == "" && values.wayOfWorkingId != "") {
        jobAdvertisementService
          .getByWayOfWorking(values.wayOfWorkingId)
          .then((result) => setJobAdvertisement(result.data.data));
      } else if (values.wayOfWorkingId == "" && values.cityId != "") {
        jobAdvertisementService
          .getByCityId(values.cityId)
          .then((result) => setJobAdvertisement(result.data.data));
      } else {
        jobAdvertisementService
          .getByWayOfWorkingIdAndCityId(values.cityId, values.wayOfWorkingId)
          .then((result) => setJobAdvertisement(result.data.data));
        console.log(values.cityId, values.wayOfWorkingId);
      }
    },
  });
  function getAllJobAdvertisement() {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllJobAdvertisement()
      .then((result) => setJobAdvertisement(result.data.data));
  }

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

 
  
  const addtoFavorites = () => {
    let favoriteService = new FavoriteAdvertisementService();

    const favorite = {
      jobSeekerId: 7,
      jobAdvertisementId: 40,
      
    };
    favoriteService.postFavoriteAdvertisement(favorite).then();
    console.log(favorite);
    toast.success("Başarılı");
  };
  return (
    <div>
      <div>
        <Form onSubmit={formik.handleSubmit}>
          <Card>
            <label>Şehir</label>
            <Dropdown
              clearable
              item
              placeholder="Şehir"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
            />
          </Card>

          <Card>
            <label>Çalışma yeri</label>
            <Dropdown
              clearable
              item
              placeholder="Çalışma yeri"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "wayOfWorkingId")
              }
              onBlur={formik.onBlur}
              id="wayOfWorkingId"
              value={formik.values.wayOfWorkingId}
              options={wayOfWorkingOption}
            />
          </Card>
          <Button
            color="vk"
            type="submit"
            fluid
            style={{ marginTop: "20px", marginBottom: "15px" }}
          >
            Filtrele
          </Button>
        </Form>
        <Button
          content="Filtreleri sıfırla"
          icon="right arrow"
          labelPosition="left"
          onClick={(e) => getAllJobAdvertisement()}
          floated="left"
        />
      </div>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Name</Table.HeaderCell>
            <Table.HeaderCell>description</Table.HeaderCell>
            <Table.HeaderCell>Way Of Working</Table.HeaderCell>
            <Table.HeaderCell>Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Max Salary</Table.HeaderCell>

            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>number Of Open Positions</Table.HeaderCell>
            <Table.HeaderCell>Created Date</Table.HeaderCell>
            <Table.HeaderCell>Dead Line</Table.HeaderCell>
            <Table.HeaderCell> </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisements) => (
            <Table.Row key={jobAdvertisements.id}>
              <Table.Cell>{jobAdvertisements.job.jobName}</Table.Cell>
              <Table.Cell>{jobAdvertisements.description}</Table.Cell>
              <Table.Cell>{jobAdvertisements.wayOfWorking.working}</Table.Cell>
              <Table.Cell>{jobAdvertisements.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisements.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisements.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvertisements.numberOfOpenPositions}</Table.Cell>
              <Table.Cell>{jobAdvertisements.createdDate}</Table.Cell>
              <Table.Cell>{jobAdvertisements.deadline}</Table.Cell>
              <Table.Cell>
              <Button
                onClick={()=>addtoFavorites()}
                    circular
                    style={{ marginLeft: "0.5em" }}
                    size="large"
                    color="red"
                    icon="heart"
                    inverted
                  >
                 
                  </Button>
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
