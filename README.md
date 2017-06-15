# Project 3 - WeeklyGrind

Weekly Grind is a community for growing creative minds. No rules, no limits. Create a private group, or join a public one near you. Learn, develop and share your experiences with your friends and peers — all for free!

This full-stack application is a combination of the React library and Firebase database.

## Getting Started

Fork and Clone directly from the master branch.

### Dependencies

```
    "firebase": "^4.1.2",
    "react": "^15.5.4",
    "react-dom": "^15.5.4",
    "react-router": "^3.0.5",

```

### Installing

Enter terminal in the root directory/git initialized project folder and run 

```
npm install

```

## Built With

* [React](https://facebook.github.io/react/) - Front End Javascript Library
* [Heroku](http://www.dropwizard.io/1.0.2/docs/) - Web Hosting Service
* [Firebase](https://firebase.google.com) - Google Database and oAuth Provider

## Contributing

Message me if you have any questions! Otherwise feel free to build upon the files here in your own fork.

## Bugs

1. Logout button disappears when outside homepage.
2. Logging out makes the sign-up button on homepage lose centering (fixed if page is refreshed)
3. For only the first time clicking "edit" on posts, the image url doesn't populate in the input field.
4. Heroku deploy prevets oAuth since app doesn't have an ssl https certification.
5. Edit/Delete buttons visibility aren't authenticated.
6. Group cards break when hitting vertical tablet and below breakpoints.
7. Navbar not animating properly except for on homepage.

## Future Goals

1. Clean up codebase. Mostly in sticks and tape format for MVP.
2. CRUD for Groups. Show all group members photos in group card.
3. Create User page.
4. Implement Commenting.
5. Implement Post Detail page.
6. oAuth on heroku deploy.
7. Build out homepage with more original onboarding content.
8. Build in a calendar (perhaps from bootstrap) to schedule group meetings.
9. Add google maps and pin users locations.
10. Consider a better way to bring in users posts (from instagram, porting to React Native App).
11. Add notifications. Look into more functional global nav.
12. Reconsider & Research firebase noSQL formatting (specifically keys in data structures).
13. Implement SASS to organize CSS into component based blocks.


## Authors

* **Mahmoud Bachir** - *Full Stack* - [mickmacks](https://github.com/mickmacks)

## License

This project is licensed under the MIT License.

## Acknowledgments

* Samuel Thornton - Material Drop Shadows: https://codepen.io/sdthornton/pen/wBZdXq
