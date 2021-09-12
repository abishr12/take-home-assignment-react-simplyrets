# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

- Made sure naming convention is clear and consistent (ex. isFavorited, favoritedProperties, cachedFavoritedProperties)

- Developed basic design and functionality first

  - Eliminated API call if cache for properties exists (no redundant calls)
  - Mainly concerned with caching logic for favorites
    - Would adjust favorites object internally and save to cache using useEffect hook

- CSS

  - Used Flexbox for responsiveness (not a fan of using the grid)
    - Adjusts very well for viewport width
  - Heart Icon
    - Used relative position so it would adjust with viewport width

- Future Work
  - React Router use to individually select properties (localhost:300/:listingId)
  - Implement functional testing using RTL (React Testing Library https://testing-library.com/docs/react-testing-library/intro/)
  - Develop ADA thoroughly (already added aria-label for property description)
    - Include date aria label
