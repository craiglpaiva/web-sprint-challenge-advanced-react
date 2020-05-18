import React from 'react';
import * as rtl from '@testing-library/react';
import PlantList from './PlantList';

test('renders PlantList without crashing', () => {
    rtl.render(<PlantList />);
});