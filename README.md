# Landing Page Template Client

Langing page is very important thing to have for every business in this digital age.  
This project provides a client side template for such a landing page.

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
npm i
```

## Deployment

1. Build docker image (recommended)

   1. Create a directory as you wish (e.g. `/landing`)
   2. Download `Dockerfile` and `Makefile` from [git](https://github.com/JuneKimDev/landing.git) in the server you want to deploy the app
   3. Create `docker-compose.yaml` as you wish
   4. Start build process by type `make` in your shell
   5. Run the docker image (if you made compose file, run `make up` in shell)

2. Or, directly build on your server

   1. Install pm2 via `npm i -g pm2` in the server you want to deploy the app
   2. Clone the repo from [git](https://github.com/JuneKimDev/landing.git); this will create `/landing` directory for you
   3. Run npm script `npm run build`
   4. Deploy the app with `pm2 start npm --name "landing" -- start`

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
