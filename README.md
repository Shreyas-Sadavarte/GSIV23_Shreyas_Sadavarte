# Movie List Web Application

This README provides an overview of the Movie List Web Application, which allows users to browse and search for upcoming movies. The application is designed to be responsive, and it utilizes state management and routing libraries to provide a seamless user experience.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [What Went Well](#what-went-well)
4. [Room for Improvement](#room-for-improvement)
5. [Feedback](#feedback)

## Getting Started

To run and test the Movie List Web Application, follow these instructions:

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your system.

### Installation

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/Shreyas-Sadavarte/GSIV23_Shreyas_Sadavarte.git
   ```

2. Navigate to the project directory.

   ```bash
   cd movie-list-app
   ```

3. Install the project dependencies.

   ```bash
   npm install
   ```

4. Start the development server.
  ```bash
   npm run dev
   ```

5. Open your web browser and go to [http://localhost:5000](http://localhost:5000) to access the Movie List Web Application.

## Features

### 1. List Page

On the List page, you can view upcoming movies displayed in movie cards, sorted by the latest first. Each movie card provides the following information:

- Movie Media (Picture)
- Movie Title
- Rating (Average Vote)
- Description (with ellipsis at the end for long descriptions)

In addition, the List page supports infinite scrolling to load more movies as you scroll down. Paging buttons are also available for convenience.

### 2. Search Functionality

The List page allows you to search for movies using the search API. Search results are displayed on the List page itself. When the search is canceled, it reverts to showing all movies as in point #1 above.

### 3. Details Page

When you click on a movie card, the application navigates to the Details page, showing comprehensive movie details, including:

- Movie Title
- Rating (Average Vote)
- Year of Release
- Description

You can navigate back to the List page using the browser back button or the home button on the Details page.

### 4. Responsive Design

The application is designed to be responsive, with a minimum width of 512 pixels. It provides an optimal user experience across various devices and screen sizes.

### 5. State Management and Routing

The Movie List Web Application utilizes a state management library  (Redux) to efficiently manage application state and common routing libraries ( React Router) for seamless navigation between pages.

## What Went Well

The following elements of the challenge exemplify my proficiency and were executed well:

- **Responsive Design**: The application's responsive design ensures a consistent and user-friendly experience across different devices and screen sizes. CSS media queries and flexible layouts were used to achieve this.

- **Infinite Scrolling**: The implementation of infinite scrolling on the List page enhances user experience by loading more movies as the user scrolls down. This feature is intuitive and efficient.

- **Search Functionality**: The search functionality allows users to find movies easily, and the transition between search results and the default list of movies is smooth and intuitive.

- **State Management and Routing**: Effective utilization of state management and routing libraries demonstrates proficiency in managing complex application state and navigation.

## Room for Improvement

If I had an additional 4 hours available for this task, I would consider the following improvements:

1. **Unit Testing**: Implement comprehensive unit tests to ensure the robustness and reliability of the application. Testing libraries such as Jest and React Testing Library could be used for this purpose.

2. **Error Handling**: Enhance error handling and user feedback in cases where API requests fail or encounter errors. This would improve the application's resilience and user experience.

3. **Sorting Options**: Add sorting options on the List page, allowing users to sort movies by criteria such as rating, release date, or title.

4. **Performance Optimization**: Optimize the application for performance by lazy-loading images, reducing unnecessary renders, and optimizing API requests.
