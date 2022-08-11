import bcrypt from 'bcryptjs';
const mockedDatasRepeated = {
  name: 'Adidas Fit Shirt',
  slug: 'adidas-fit-shirt',
  category: 'Shirts',
  image: '/images/p2.jpg',
  price: 250,
  countInStock: 0,
  brand: 'Adidas',
  rating: 4.0,
  numReviews: 10,
  description:
    'high quality product Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna mauris, lobortis non pellentesque nec, finibus et neque. Pellentesque molestie non sem non posuere. Aliquam dapibus dui placerat mauris molestie auctor. Quisque nec erat non metus iaculis pulvinar. Vestibulum at orci ligula. Phasellus at aliquam tellus. Suspendisse sit amet nulla lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

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
    }
  ],
  products: [
    {
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description:
        'high quality shirt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna mauris, lobortis non pellentesque nec, finibus et neque. Pellentesque molestie non sem non posuere. Aliquam dapibus dui placerat mauris molestie auctor. Quisque nec erat non metus iaculis pulvinar. Vestibulum at orci ligula. Phasellus at aliquam tellus. Suspendisse sit amet nulla lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
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
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
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
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description:
        'high quality product Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna mauris, lobortis non pellentesque nec, finibus et neque. Pellentesque molestie non sem non posuere. Aliquam dapibus dui placerat mauris molestie auctor. Quisque nec erat non metus iaculis pulvinar. Vestibulum at orci ligula. Phasellus at aliquam tellus. Suspendisse sit amet nulla lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    mockedDatasRepeated,
    mockedDatasRepeated,
    mockedDatasRepeated,
    mockedDatasRepeated, 
    mockedDatasRepeated,
    mockedDatasRepeated,
    mockedDatasRepeated,
    mockedDatasRepeated,
    mockedDatasRepeated,
    mockedDatasRepeated,
    mockedDatasRepeated,
    mockedDatasRepeated,
    mockedDatasRepeated,
    mockedDatasRepeated
  ],
};
export default data;
