import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl'

function RenderLeader(props) {
    const leaders = props.leads.map((leader)=> {
    return (
        <Media className="mt-5" key={leader.id}>
        <Media left href="/">
          <Media object src={baseUrl + leader.image} alt="Generic placeholder image" />
        </Media>
        <Media body className="ml-4">
          <Media heading>
           {leader.name}
         <br></br> <strong >{leader.designation}</strong>
          </Media>
          {leader.description}
          </Media>
      </Media>
    );
});
  
return leaders;
}

export default RenderLeader
