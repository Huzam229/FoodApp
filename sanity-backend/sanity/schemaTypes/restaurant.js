import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Restaurant Name',
            validation: rule => rule.required()
        },
        {
            name: 'description',
            type: 'string',
            title: 'Restaurant Description',
            validation: rule => rule.max(200)
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the Restaurant'
        },
        {
            name: 'lat',
            type: 'number',
            title: 'Latitude of the Restaurant'
        },
        {
            name: 'lng',
            type: 'number',
            title: 'Longitude of the Restaurant'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address of the Restaurant'
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Enter a number Between 1 to 5',
            validation: rule => rule.required().min(1).max(5).error('Please enter a value between 1 to 5')
        },
        {
            name: 'reviews',
            type: 'string',
            title: 'Reviews'
        },
        {
            name: 'type',
            type: 'reference',
            title: 'Category',
            validation: rule => rule.required(),
            to: [{ type: 'category' }]

        },
        {
            name: 'dishes',
            type: 'array',
            title: 'Dishes',
            validation: rule => rule.required(),
            of: [{ type: 'reference', to: [{ type: 'dish' }] }]

        },



    ],
})
