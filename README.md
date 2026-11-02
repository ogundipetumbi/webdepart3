# LengthHairCare Website
**WEDE5020 — Web Development Portfolio of Evidence (POE)**
**Project:** LengthHairCare
**Deployment:** GitHub Pages

## 1. Project Overview

LengthHairCare is a multi-page website developed for a South African natural hair-care brand. The website aims to provide visitors with information about natural hair-care products, hair porosity and general hair-care routines.

The project was developed using HTML5, CSS3 and vanilla JavaScript. It focuses on creating a straightforward, accessible and responsive user experience across different screen sizes and devices.

The website allows visitors to explore products, filter the product catalogue, learn about different hair porosity types, submit product enquiries and access the brand's contact information.

## 2. Project Objectives

The main objectives of the website are to:

* Establish an online presence for LengthHairCare.
* Present natural hair-care products in an organised catalogue.
* Provide visitors with basic information about hair porosity.
* Allow users to search and filter available products.
* Provide an enquiry form for personalised product recommendations.
* Provide a contact form for general questions and feedback.
* Incorporate an interactive map showing the business location.
* Apply responsive design principles to support mobile and desktop users.
* Implement basic search engine optimisation (SEO) and accessibility practices.

## 3. Website Structure

The website consists of five main HTML pages.

| Page       | File                  | Description                                                                         |
| ---------- | --------------------- | ----------------------------------------------------------------------------------- |
| Home       | `index.html`          | Introduces LengthHairCare and displays featured products and brand information.     |
| Shop       | `pages/products.html` | Displays the product catalogue, including search and filtering functionality.       |
| Hair Guide | `pages/enquiry.html`  | Provides information about hair porosity and a product recommendation enquiry form. |
| About Us   | `pages/about.html`    | Explains the brand, its mission, values and approach to natural hair care.          |
| Contact    | `pages/contact.html`  | Provides contact information, an interactive map and a general contact form.        |


### Main Navigation
All five pages share a consistent navigation structure. Visitors can move between the Home, Shop, Hair Guide, About Us and Contact sections.

The navigation is intended to make the website easy to understand and use.
## 4. Main Website Features

### 4.1 Homepage
he homepage introduces the LengthHairCare brand through a hero section, featured products and an overview of the brand's approach to natural hair care.

Features include:
* Main promotional heading and introductory text.
* Navigation links to the other website pages.
* Featured product cards.
* Product image viewing functionality.
* Links to the product catalogue and hair guide.
* Brand introduction and benefits sections.

### 4.2 Product Catalogue
The product page provides a catalogue of natural hair-care products.

JavaScript is used to support dynamic product functionality.
Features include:

* Product catalogue generated using JavaScript.
* Search functionality.
* Product category filtering.
* Product result count.
* Empty-state message when no products match a search.
* Product image viewing through a lightbox.
* Product enquiry links.

The catalogue is designed to make it easier for visitors to find products based on their interests.

### 4.3 Hair Porosity Guide

The Hair Guide page introduces three general hair porosity categories:
* Low porosity.
* Medium porosity.
* High porosity.

JavaScript accordion functionality allows visitors to expand and collapse the information associated with each category.
The page also includes an enquiry form where visitors can provide their details and request a product recommendation.

The information provided is intended for general educational purposes and does not replace professional hair or scalp advice.

### 4.4 Product Enquiry Form
The enquiry form allows visitors to request assistance with selecting products.

The form includes:
* Full name.
* Email address.
* Product or service of interest.
* Hair porosity.
* Message field.

JavaScript validation is used to check the information entered before processing the enquiry.
The form also includes areas for displaying validation messages and submission feedback.

### 4.5 Contact Page
The Contact page provides visitors with the business's contact details and a general message form.

Features include:
* Business email address.
* Business address.
* Service-area information.
* General contact form.
* Input validation and feedback.
* Google Maps link.
* Interactive map using MapLibre GL JS and OpenFreeMap.


### 4.6 Interactive Map
The contact page uses MapLibre GL JS to display an interactive map.
The map uses the OpenFreeMap Liberty style and displays a location marker.

Features include:
* Interactive map navigation.
* Location marker.
* Map zoom controls.
* Google Maps link.
* Fallback message if the interactive map cannot load.
* Keyboard interaction support for the map marker.

The map requires an internet connection to load the external map library and map tiles.

## 5. Technologies Used
| Technology     | Purpose                                                |
| -------------- | ------------------------------------------------------ |
| HTML5          | Website structure and content.                         |
| CSS3           | Styling, layout and responsive design.                 |
| JavaScript     | Interactive website functionality and form validation. |
| MapLibre GL JS | Interactive map rendering.                             |
| OpenFreeMap    | Map style and vector tile services.                    |
| Google Maps    | External directions and location access.               |
| GitHub Pages   | Intended static website hosting platform.              |

No database or custom backend server is included in the assignment.

## 6. Project Folder Structure
The project is organised into the following folders and files:
webdepart3/
│
├── index.html
│
├── pages/
│   ├── products.html
│   ├── enquiry.html
│   ├── about.html
│   └── contact.html
│
├── css/
│   └── style.css
│
├── javascript/
│   ├── script.js
│   └── map.js
│
├── assets/
│   └── [Website images and other visual assets]
│
├── sitemap.xml
├── robots.txt
└── README.md
```

The folder structure separates the HTML pages, stylesheet, JavaScript files and website assets to make the project easier to maintain.

## 7. Installation and Local Setup

The website is a static website and does not require a server-side installation.

## 8. JavaScript Functionality

JavaScript is used to make the website interactive.

The main functionality includes:

* Dynamic product rendering.
* Product search.
* Product category filtering.
* Product result counting.
* Empty search-result messages.
* Product image lightbox.
* Keyboard interaction for the lightbox.
* Hair porosity accordion.
* Product selection through URL query parameters.
* Enquiry form validation.
* Contact form validation.
* User feedback messages.
* Interactive map functionality through a separate JavaScript file.

The main JavaScript file is:

`javascript/script.js`

The map functionality is handled separately through:

`javascript/map.js`

Separating the map functionality from the main website script helps keep the code organised by purpose.

## 9. Responsive Design and Accessibility

The website is intended to support different screen sizes, including desktop computers, tablets and mobile devices.

Accessibility considerations incorporated into the HTML include:

* Semantic HTML elements such as `header`, `nav`, `main`, `section`, `article` and `footer`.
* Alternative text for product images.
* Labels associated with form inputs.
* Descriptive navigation labels.
* Appropriate heading structure.
* Keyboard-accessible buttons.
* ARIA attributes for interactive elements.
* Live regions for selected feedback messages.
* Visible form error areas.

The stylesheet should also be tested to confirm that the layout, navigation, product cards and forms remain usable on smaller screens.

## 10. Search Engine Optimisation (SEO)

Basic SEO practices have been incorporated into the website.

These include:

* Descriptive page titles.
* Meta descriptions.
* Relevant page-specific keywords.
* Meaningful heading structures.
* Alternative text for images.
* A `sitemap.xml` file.
* A `robots.txt` file.

### Sitemap

The sitemap identifies the main website pages for search engine discovery.

File:

`sitemap.xml`

The sitemap uses the standard XML sitemap structure.

### Robots.txt

The robots file provides general crawling instructions to search engine crawlers.

File:

`robots.txt`

The current file allows all user agents to crawl the website and identifies the location of the sitemap.

**SEO limitation:** Creating a sitemap and robots file does not mean that search engines will index the website. 
## 11. Testing and Quality Assurance

| Test                  | Expected result                                                         |
| --------------------- | ----------------------------------------------------------------------- |
| Homepage navigation   | Navigation links open the correct pages.                                |
| Product catalogue     | Products display correctly.                                             |
| Product search        | Relevant products appear based on search terms.                         |
| Category filtering    | Products are filtered according to the selected category.               |
| Empty search          | An appropriate message appears when no products match.                  |
| Product lightbox      | Product images open and close correctly.                                |
| Porosity accordion    | Information expands and collapses correctly.                            |
| Enquiry form          | Invalid or incomplete information displays appropriate feedback.        |
| Contact form          | Validation works and the intended email process is clear.               |
| Map                   | The map loads and the marker opens the correct Google Maps location.    |
| Responsive layout     | Pages remain usable on mobile, tablet and desktop screens.              |
| Accessibility         | Forms, navigation and interactive elements can be used with a keyboard. |
| SEO files             | Sitemap and robots.txt are accessible at the deployed website address.  |
| Browser compatibility | Pages display and function correctly in supported browsers.             |

## 12. Known Limitations and Future Improvements

Potential improvements include:

1. **Backend integration:** Introduce a backend service to process and manage customer enquiries.
2. **Database integration:** Store product information and customer enquiries securely.
3. **Product checkout:** Add an online shopping cart and secure payment functionality.
4. **Customer accounts:** Allow customers to create accounts and track orders.
5. **Product management:** Introduce an administration interface for managing product details and stock.
6. **Email automation:** Implement a reliable server-side email service for customer enquiries.
7. **SEO improvements:** Add structured data, canonical URLs and search engine verification.
8. **Accessibility testing:** Conduct additional testing using screen readers and accessibility evaluation tools.
9. **Map verification:** Replace the placeholder address with the verified business location.
10. **Browser testing:** Expand testing across additional browsers and devices.

## 13. Development Changelog

### Version 1.0 — Changes from previous parts
* From part 1, I added images to my html pages
* from part1, I added more comments to the code
* From part 1, I committed more reguraly 
* From part 1, I added a heron section
* In part 2, I add no recommended changes from my lecturer.

### Version 1.1 — Initial Website Development
* Created the main website structure.
* Developed the homepage.
* Added the Products, Hair Guide, About Us and Contact pages.
* Created the main navigation system.
* Added introductory brand content and product information.
* Developed the initial CSS styling.

### Version 1.2 — JavaScript Functionality

* Added dynamic product catalogue functionality.
* Implemented product search and category filtering.
* Added product result counting.
* Added an empty-state message for unsuccessful searches.
* Implemented product image lightbox functionality.
* Added the hair porosity accordion.
* Introduced product selection through URL query parameters.
* Added enquiry form validation.
* Added contact form validation and user feedback.

### Version 1.3 — User Experience and Accessibility

* Added descriptive image alternative text.
* Improved form labels and validation message areas.
* Added ARIA attributes to interactive elements.
* Improved keyboard interaction for selected components.
* Added feedback messages for form interactions.
* Reviewed the website navigation and page structure.










