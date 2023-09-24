import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import FoodOptionButtons from './components/foodOptionButtons';
import Rating from "./components/rating"
import Results from "./components/resultsLayout"
import ResultCard from "./components/resultCard"
import { getResults } from './services/MapsService.js';
import foodChoices from './data/categories';

// Testing if food buttons work as expected
describe('FoodOptionButtons Component', () => {

  it('calls onButtonClick with correct type for each button', () => {
    const onButtonClickMock = jest.fn();
    const { getByAltText } = render(<FoodOptionButtons onButtonClick={onButtonClickMock} />);

    const cafeButton = getByAltText('cafe');
    fireEvent.click(cafeButton);
    expect(onButtonClickMock).toHaveBeenCalledWith(foodChoices[0]);

    const burgerButton = getByAltText('burger');
    fireEvent.click(burgerButton);
    expect(onButtonClickMock).toHaveBeenCalledWith(foodChoices[1]);

    const sushiButton = getByAltText('sushi');
    fireEvent.click(sushiButton);
    expect(onButtonClickMock).toHaveBeenCalledWith(foodChoices[2]);

    const fruitButton = getByAltText('fruit');
    fireEvent.click(fruitButton);
    expect(onButtonClickMock).toHaveBeenCalledWith(foodChoices[3]);

  });

  // Tests that the surprise me button does choose out of the selected food type
  it('calls onButtonClick with a random type for "Surprise Me!"', () => {
    const onButtonClickMock = jest.fn();
    const { getByText } = render(<FoodOptionButtons onButtonClick={onButtonClickMock} />);

    const surpriseButton = getByText('Surprise Me!');
    fireEvent.click(surpriseButton);

    // Assert that onButtonClickMock was called with a valid type
    expect(onButtonClickMock).toHaveBeenCalled();
    const calledType = onButtonClickMock.mock.calls[0][0];
    expect(foodChoices).toContain(calledType);
  });

});

// Test if the rating is calculated and displaying correctly
describe('Rating Component', () => {
  it('renders full stars', () => {
    const { container } = render(<Rating value={4.5} total={100} />);

    // Assert that the correct number of full stars is rendered
    const fullStars = container.querySelectorAll('[alt="full star"]');
    expect(fullStars.length).toBe(4);
  });

  it('renders half star', () => {
    const { container } = render(<Rating value={3.5} total={50} />);

    // Assert that the half star is rendered
    const halfStar = container.querySelector('[alt="half star"]');
    expect(halfStar).toBeInTheDocument();
  });

  it('renders empty stars', () => {
    const { container } = render(<Rating value={2.5} total={30} />);

    // Assert that the correct number of empty stars is rendered
    const emptyStars = container.querySelectorAll('[alt="empty star"]');
    expect(emptyStars.length).toBe(2);
  });

  it('renders correct value and total reviews', () => {
    const { getByText } = render(<Rating value={4} total={80} />);

    // Assert that the correct value and total reviews are displayed
    const ratingText = getByText('4 (80 Reviews)');
    expect(ratingText).toBeInTheDocument();
  });

});

const mockedResults = [
  {
    name: 'Restaurant Name',
    price: 2,
    rating: 4.2,
    totalRatings: 150,
    openingHours: 'Sunday: 8am-10pm',
    formattedAddress: '789 Oak St, Village',
    formattedPhone: '555-123-4567',
  },
  {
    name: 'Restaurant Name 2',
    price: 1,
    rating: 3.5,
    totalRatings: 40,
    openingHours: 'Saturday: 9am-9pm',
    formattedAddress: '123 High St',
    formattedPhone: '555-123-4567'
  }
];

// Checking if the data passed to results card component is correct
describe('ResultCard Component', () => {
  it('displays result card content', () => {
    const mockResult = mockedResults[0]

    render(<ResultCard result={mockResult} />);

    expect(mockResult.name).toBe('Restaurant Name');
    expect(mockResult.price).toBe(2);
    expect(mockResult.rating).toBe(4.2);
    expect(mockResult.totalRatings).toBe(150);
    expect(mockResult.openingHours).toBe('Sunday: 8am-10pm');
    expect(mockResult.formattedAddress).toBe('789 Oak St, Village');
    expect(mockResult.formattedPhone).toBe('555-123-4567');

  });
});

jest.mock('./services/MapsService.js'); // Mock the MapsService module

test('renders Results component without errors', () => {
  render(<Results />);
});

test('getResults function returns mocked results', async () => {

  getResults.mockResolvedValue(mockedResults);

  const results = await getResults('queryType', 0, 0);

  expect(results).toEqual(mockedResults);
});

test('getResults function returns mocked results', async () => {

  getResults.mockResolvedValue(mockedResults);

  const results = await getResults('queryType', 0, 0);

  expect(results).toEqual(mockedResults);
});
