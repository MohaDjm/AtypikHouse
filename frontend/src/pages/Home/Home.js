import React from 'react';
import SearchTabPanel from '../../components/SearchTabPanel/SearchTabPanel';
import Card from '../../components/Card/Card';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const Home = () => {
  const accommodations = [
    {
      images: [
        '//media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_63362_listing_image_f63150776ca044fdb0f77a573d14dcdd-glamping-4a23c032-310b-41ab-8a4c-36b14463dbe5/64d530ac09b3c9aedcd761d602cccdce.jpg',
        '//media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_63362_listing_image_7555453673ef4fb2918ba967d9851d02-glamping-8dbdee53-0a66-4f90-80d9-5891e3241248/2bf1db7647a4a7df2a4639ccc8f91023.jpg',
      ],
      title: 'Bouville, France',
      description: 'Date de construction : 13e siècle\n4–9 juil. · Professionnel',
      price: '232',
    },
    {
      images: [
        '//media.glampinghub.com/CACHE/images/accommodations/enchanting-tree-houses-near-brittany-coastline-in-france-1520944668119/560b95fc2af4a077501581aad7d779c0.jpg',
        '//media.glampinghub.com/CACHE/images/accommodations/enchanting-tree-houses-near-brittany-coastline-in-france-1520944668075/c98167f6e609f7850f6db52692c73c39.jpg',
      ],
      title: 'Tree Houses, Plehedel, France',
      description: 'Tree Houses (Plehedel, Brittany, France)',
      price: '200',
    },
    {
      images: [
        '//media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_63362_listing_image_f63150776ca044fdb0f77a573d14dcdd-glamping-4a23c032-310b-41ab-8a4c-36b14463dbe5/64d530ac09b3c9aedcd761d602cccdce.jpg',
        '//media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_63362_listing_image_7555453673ef4fb2918ba967d9851d02-glamping-8dbdee53-0a66-4f90-80d9-5891e3241248/2bf1db7647a4a7df2a4639ccc8f91023.jpg',
      ],
      title: 'Bouville, France',
      description: 'Date de construction : 13e siècle\n4–9 juil. · Professionnel',
      price: '232',
    },
    {
      images: [
        '//media.glampinghub.com/CACHE/images/accommodations/enchanting-tree-houses-near-brittany-coastline-in-france-1520944668119/560b95fc2af4a077501581aad7d779c0.jpg',
        '//media.glampinghub.com/CACHE/images/accommodations/enchanting-tree-houses-near-brittany-coastline-in-france-1520944668075/c98167f6e609f7850f6db52692c73c39.jpg',
      ],
      title: 'Tree Houses, Plehedel, France',
      description: 'Tree Houses (Plehedel, Brittany, France)',
      price: '200',
    },
    {
      images: [
        '//media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_63362_listing_image_f63150776ca044fdb0f77a573d14dcdd-glamping-4a23c032-310b-41ab-8a4c-36b14463dbe5/64d530ac09b3c9aedcd761d602cccdce.jpg',
        '//media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_63362_listing_image_7555453673ef4fb2918ba967d9851d02-glamping-8dbdee53-0a66-4f90-80d9-5891e3241248/2bf1db7647a4a7df2a4639ccc8f91023.jpg',
      ],
      title: 'Bouville, France',
      description: 'Date de construction : 13e siècle\n4–9 juil. · Professionnel',
      price: '232',
    },
    {
      images: [
        '//media.glampinghub.com/CACHE/images/accommodations/enchanting-tree-houses-near-brittany-coastline-in-france-1520944668119/560b95fc2af4a077501581aad7d779c0.jpg',
        '//media.glampinghub.com/CACHE/images/accommodations/enchanting-tree-houses-near-brittany-coastline-in-france-1520944668075/c98167f6e609f7850f6db52692c73c39.jpg',
      ],
      title: 'Tree Houses, Plehedel, France',
      description: 'Tree Houses (Plehedel, Brittany, France)',
      price: '200',
    },
    {
      images: [
        '//media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_63362_listing_image_f63150776ca044fdb0f77a573d14dcdd-glamping-4a23c032-310b-41ab-8a4c-36b14463dbe5/64d530ac09b3c9aedcd761d602cccdce.jpg',
        '//media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_63362_listing_image_7555453673ef4fb2918ba967d9851d02-glamping-8dbdee53-0a66-4f90-80d9-5891e3241248/2bf1db7647a4a7df2a4639ccc8f91023.jpg',
      ],
      title: 'Bouville, France',
      description: 'Date de construction : 13e siècle\n4–9 juil. · Professionnel',
      price: '232',
    },
    {
      images: [
        '//media.glampinghub.com/CACHE/images/accommodations/enchanting-tree-houses-near-brittany-coastline-in-france-1520944668119/560b95fc2af4a077501581aad7d779c0.jpg',
        '//media.glampinghub.com/CACHE/images/accommodations/enchanting-tree-houses-near-brittany-coastline-in-france-1520944668075/c98167f6e609f7850f6db52692c73c39.jpg',
      ],
      title: 'Tree Houses, Plehedel, France',
      description: 'Tree Houses (Plehedel, Brittany, France)',
      price: '200',
    },
  ];

  return (
    <HomeContainer>
      <SearchTabPanel />
      <CardsContainer>
        {accommodations.map((accommodation, index) => (
          <Card
            key={index}
            images={accommodation.images}
            title={accommodation.title}
            description={accommodation.description}
            price={accommodation.price}
          />
        ))}
      </CardsContainer>
    </HomeContainer>
  );
};

export default Home;
