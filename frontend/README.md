# Mansa - Frontend

This project uses NextJS and is [deployed to Vercel](https://mansa-frontend.vercel.app/).

## Gotchas

-   After trying a few routes on the backend, there is no route for `/:accounts/:accountId` to fetch details for a particular account
-   With the above assumption, the account details are passed to the individual account page in as a `base-64` encoded JSON string

## Design

For the design, it aims to be minimal yet informative. With the right use of colors and weights to emphasize on information, the design aims to provide the user information they require in the most clear and concise manner.

The entire app works on all screen sizes seamlessly. It is made responsive from wide screens, all the way down to mobile phones. The design uses CSS grids extensively to achieve the mentioned responsiveness.

Internally, I used Tailwind CSS in conjunction with Styled Components. This decision was made keeping in mind the ease of design and the room for extensibility and flexibility.

It uses `twin.macro` to provide us with errors on incorrect Tailwind class names.

## Performance

The app heavily relies on `getStaticProps` and `getServerSideProps` to provide a lot of functionality:

-   Data fetching
-   Filtering
-   Searching

I think it strikes a good balance between using Automatic Static Optimization and true Server Side Rendering.

In the `/accounts/:accountId` page, the information needs to always be fetched on-demand per-request as it can have new data on every refresh.

In the `/accounts` and the `/` pages, the information need not always be prefetched on-demand and can be rehydrated on the client side.

## Tests

The project is extensively covered by both integration and unit tests. All the main features are tested end-to-end.

The project aims to unit test individual functions which help in data fetching, but does integration tests on various use cases on entire pages.

I used a combination of Jest and Cypress to achieve a good balance between these two types of tests.

\*Note:\*\* To run the Cypress tests, you will first need to run the server using `yarn dev`.

## Commands

-   `yarn dev` -> Run in development mode
-   `yarn build` -> Build for production
-   `yarn test` -> Run Jest test suites
-   `yarn cypress` -> Run Cypress E2E tests
-   `yarn cypress:open` -> Open Cypress dashboard
-   `yarn lint` -> Run lint checks
