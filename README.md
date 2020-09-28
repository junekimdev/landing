# Landing Page Demo

A good langing page is a must-have for every business in this digital age.  
This project provides a demo langing page that is built with NextJS which is a great ReactJS framework.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to install Node.js at least 12.x.x LTS

```shell
# Debian
sudo apt update
sudo apt install nodejs
nodejs -v
```

### Installing

Clone the repo and install dependencies

```shell
git clone https://github.com/JuneKimDev/landing.git
yarn
```

## Development & Deployment

1. Using docker (recommended)

   1. Clone the repo from [git](https://github.com/JuneKimDev/landing.git); this will create `/landing` directory for you
   2. Develop your landing page
   3. Build by running `make`
   4. Deploy by running `make up`

2. Using pm2

   1. Install pm2 via `yarn global add pm2` in the server you want to deploy the app
   2. Clone the repo from [git](https://github.com/JuneKimDev/landing.git); this will create `/landing` directory for you
   3. Develop your landing page
   4. Build by running `yarn run build`
   5. Deploy by running `pm2 start yarn --name "landing" -- start`

## Built With

- [Next.js](https://nextjs.org/) - The web framework used in the project
- [Typescript](https://www.typescriptlang.org/) - The language used in the project
- [Scss](https://sass-lang.com/) - Stylesheet language used in the project

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/JuneKimDev/landing/tags).

## Authors

- **June Kim** - _Initial work_ - [Github](https://github.com/JuneKimDev)

See also the list of [contributors](https://github.com/JuneKimDev/landing/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- June Kim is the creator of the project
