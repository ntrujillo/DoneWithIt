import React from 'react';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../components/forms';

import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category')
});

const categories = [
    { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
    { label: 'Cars', value: 2, backgroundColor: 'orange', icon: 'car' },
    { label: 'Cameras', value: 3, backgroundColor: 'yellow', icon: 'camera' },
    { label: 'Games', value: 4, backgroundColor: 'green', icon: 'lock' },
    { label: 'Clothing', value: 5, backgroundColor: 'green', icon: 'lock' },
    { label: 'Sports', value: 6, backgroundColor: 'blue', icon: 'lock' },
    { label: 'Movies & Music', value: 7, backgroundColor: 'blue', icon: 'lock' },
    { label: 'Books', value: 8, backgroundColor: 'purple', icon: 'book' },
    { label: 'Other', value: 9, backgroundColor: 'gray', icon: 'lock' },
];

function ListingEditScreen(props) {
    return (
        <Screen>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null
                }}
                onSubmit={values => consgole.log(values)}
                validationSchema={validationSchema}>
                <AppFormField maxLength={255} name="title" placeholder='Title' />
                <AppFormField
                    keyboardType='numeric'
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLiness={3}
                    placeholder='Description'
                />
                <SubmitButton title='Post' />
            </AppForm>
        </Screen>
    );
}

export default ListingEditScreen;