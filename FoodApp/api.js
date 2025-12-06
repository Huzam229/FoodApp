import client from './sanity';

let sanityQuery = (query, params) => client.fetch(query, params);

export const getFeaturedRestaurant = () => {
    return sanityQuery(
        `*[_type == "featured"]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->{
                    ...
                },
                type->{
                    name
                }
            }
        }`
    );
};

export const getCategory = () => {
    return sanityQuery(`
    *[_type=='category']
    `)
};

export const getFeaturedRestaurantById = (id) => {
    return sanityQuery(  
        `*[_type == "featured" && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          },
          type->{
            name
          }
        }
      }[0]`,
        { id }
    );
};
