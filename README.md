# Web application for booking apartments
This repository contains a full-stack apartment renting application built with Next.js. The application offers a comprehensive set of features, including user authentication, apartment creation, search functionalities, favorite listings, and reservation management.

## Features

- User Authentication: Secure sign-up and login functionality for users.
- Apartment Creation: Registered users can create and manage apartment listings.
- Search by Filters: Users can search for apartments using various filters such as location, date, category, number of geusts, rooms and bathrooms.
- Favorite Apartments: Users can mark apartments as favorites for easy access.
- Guest Search: Non-authenticated users can browse and search for apartments.
- Reservations: Users can make and manage reservations for apartments.
- Cancellation: Hosts and users can cancel reservations with proper notifications.

## Getting started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>=20.11.1)
- npm (>=10.6.0)
- Git

### Installation
1. Clone the repository
2. Install dependencies
3. Environment Variables
   - Create a .env file in the root directory and add the necessary environment variables:
     - DATABASE_URL=your_database_url
     - NEXTAUTH_URL=your_url
     - NEXTAUTH_SECRET=your_nextauth_secret
     - GITHUB_ID=your_github_id
     - GITHUB_SECRET=your_github_secret 
     - GOOGLE_CLIENT_ID=your_google_client_id 
     - GOOGLE_CLIENT_SECRET=your_google_client_secret
     - NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   - Ensure to replace all variable values with your actual.
4. Run Database Migrations
5. Running the Application

## Project Structure

- /pages: Contains the authorization route. 
- /app: Components and application logic.
- /prisma: Database schema and migrations.
- /public: Static files and assets.
- /cypress: Application tests

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1IMeAlJr)
