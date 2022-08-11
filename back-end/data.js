import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      firstname: 'Driss',
      lastname: 'Kanouni',
      email: 'canon78500@hotmail.fr',
      password: bcrypt.hashSync('admin'),
      adminPrivilege: true,
      address: '21 Rue des Abysses, 78500, Sartrouville',
      phoneNumber: '0638918383',
    },
    {
      firstname: 'Zicco',
      lastname: 'McBernick',
      email: 'ziccoBiscotto@hotmail.fr',
      password: bcrypt.hashSync('123456'),
      adminPrivilege: false,
      address: '21 Rue des Abysses, 72000, Bourges',
      phoneNumber: '0638918384',
    },
  ],
  products: [
    {
      name: 'Nike Slim maillot',
      slug: 'nike-slim-maillot',
      category: 'Maillot',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description:
        'high quality maillot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna mauris, lobortis non pellentesque nec, finibus et neque. Pellentesque molestie non sem non posuere. Aliquam dapibus dui placerat mauris molestie auctor. Quisque nec erat non metus iaculis pulvinar. Vestibulum at orci ligula. Phasellus at aliquam tellus. Suspendisse sit amet nulla lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Adidas Fit maillot',
      slug: 'adidas-fit-maillot',
      category: 'Maillot',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description:
        'high quality product Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna mauris, lobortis non pellentesque nec, finibus et neque. Pellentesque molestie non sem non posuere. Aliquam dapibus dui placerat mauris molestie auctor. Quisque nec erat non metus iaculis pulvinar. Vestibulum at orci ligula. Phasellus at aliquam tellus. Suspendisse sit amet nulla lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Nike Slim pantalon',
      slug: 'nike-slim-pantalon',
      category: 'Pantalon',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description:
        'high quality product Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna mauris, lobortis non pellentesque nec, finibus et neque. Pellentesque molestie non sem non posuere. Aliquam dapibus dui placerat mauris molestie auctor. Quisque nec erat non metus iaculis pulvinar. Vestibulum at orci ligula. Phasellus at aliquam tellus. Suspendisse sit amet nulla lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Adidas Fit pantalon',
      slug: 'adidas-fit-pantalon',
      category: 'Pantalon',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description:
        'high quality product Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna mauris, lobortis non pellentesque nec, finibus et neque. Pellentesque molestie non sem non posuere. Aliquam dapibus dui placerat mauris molestie auctor. Quisque nec erat non metus iaculis pulvinar. Vestibulum at orci ligula. Phasellus at aliquam tellus. Suspendisse sit amet nulla lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
};
export default data;
