import React, { useState, useEffect } from "react";
import { Table,  Icon,Menu,Button} from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToFavorites, removeFromFavorites } from "../Store/Actions/FavoriteActions";
import JobAdvertisementService from '../Services/jobAdvertisementService'
import { addToCart } from "../Store/Actions/CartActions";


export default function JobAdvertisementList() {
    const [jobAdvertisements, setJobAdvertisement] = useState([])
    const dispatch = useDispatch();
    const [activePage, setActivePage] = useState(1);
    const [filterOption, setFilterOption] = useState({});
    const [pageSize] = useState(2);
    const [totalPageSize, setTotalPageSize] = useState(0);

    useEffect(()=>{
       let jobAdvertisementService=new JobAdvertisementService()
       jobAdvertisementService.getAllJobAdvertisement().then(result=>setJobAdvertisement(result.data.data))     
      },[])
  //     jobAdService.getPageableAndFilterJobPostings(activePage, pageSize, filterOption)
  //   .then((result) => {
  //     setJobAds(result.data.data);
  //     setTotalPageSize(parseInt(result.data.message));
  //   });
  // }, [filterOption, activePage, pageSize]);

  const handleFilterClick = (filterOption) => {
    if(filterOption.cityId.length === 0){
      filterOption.cityId = null;
    }
    if(filterOption.jobPositionId.length === 0){
      filterOption.jobPositionId = null;
    }
    if(filterOption.workPlaceId.length === 0){
      filterOption.workPlaceId = null;
    }
    if(filterOption.workTimeId.length === 0){
      filterOption.workTimeId = null;
    }
    setFilterOption(filterOption);
    setActivePage(1);
  }

  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage);
  }
  
    
      const handleAddToFavorites=(jobAdvertisements)=>{
        dispatch(addToFavorites(jobAdvertisements))
        toast.success(`${jobAdvertisements.employerId} sepete eklendi!`)
        console.log("eklendi")
    
     }
    //  const handleAddToFavorities = (jobAdvertisements) => {
    //   dispatch(addToCart(jobAdvertisements));
    //   toast.success(`${jobAdvertisements.employerId} sepete eklendi!`)
    // };

      const handleRemoveToFavorites=(jobAdvertisements)=>{
        dispatch(removeFromFavorites(jobAdvertisements))
    
      }
      return (
        <div>
 
        
          <Table celled>
            <Table.Header>
              <Table.Row>
              
                <Table.HeaderCell>Min Salary</Table.HeaderCell>
                <Table.HeaderCell>Max Salary</Table.HeaderCell>
                
                <Table.HeaderCell>description</Table.HeaderCell>
                <Table.HeaderCell>numberOfOpenPositions</Table.HeaderCell>
                <Table.HeaderCell>deadline</Table.HeaderCell>
                <Table.HeaderCell>  </Table.HeaderCell>
               
              
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
          
          
                  {jobAdvertisements.map((jobAdvertisements)=>
                  (
                    <Table.Row key={jobAdvertisements.id}>
                    
                    <Table.Cell>{jobAdvertisements.minSalary}</Table.Cell>
                    <Table.Cell>{jobAdvertisements.maxSalary}</Table.Cell>
                    <Table.Cell>{jobAdvertisements.description}</Table.Cell>
                    <Table.Cell>{jobAdvertisements.numberOfOpenPositions}</Table.Cell>
                    <Table.Cell>{jobAdvertisements.deadline}</Table.Cell>
                    <Table.Cell>
                    <Button size="mini" basic color="blue" onClick={() => handleAddToFavorites(jobAdvertisements)}>
                        Add Favorities
                      </Button>
                    </Table.Cell>
               
                 
                   
                  </Table.Row>
    
    
                  ))
              }
            
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
