import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLaptop, FaRegCommentDots, FaHeadset, FaTools } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptop style={{ color: 'white', width: '24px', height: '24px' }} />,
    title: 'Laptop Finder',
    description: 'Find Your Laptop Easily',
  },
  {
    icon: <FaRegCommentDots style={{ color: 'white', width: '24px', height: '24px' }} />,
    title: 'Raise a Complain',
    description: 'Share your experience',
  },
  {
    icon: <FaHeadset style={{ color: 'white', width: '24px', height: '24px' }} />,
    title: 'Online Support',
    description: 'Get Online Support',
  },
  {
    icon: <FaTools style={{ color: 'white', width: '24px', height: '24px' }} />,
    title: 'Servicing Center',
    description: 'Repair Your Device',
  },
];

const ServiceOptions = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '16px',
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
    marginBottom: '8px',
    backgroundColor: '#F44336',
    borderRadius: '50%',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '4px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#757575',
  };

  return (
    <Container>
    <div style={containerStyle}>
      {services.map((service, index) => (
        <div key={index} style={itemStyle}>
          <div style={iconContainerStyle}>
            {service.icon}
          </div>
          <h3 style={titleStyle}>{service.title}</h3>
          <p style={descriptionStyle}>{service.description}</p>
        </div>
      ))}
    </div>
    </Container>
  );
};

export default ServiceOptions;
