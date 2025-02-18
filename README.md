<a id="readme-top"></a>
<div align="left">
  <h3 align="left">Rainy City Blog</h3>

  <p align="left">
   Full stack blog application that features an Express/Mongoose backend which connects to a MongoDB database to efficiently fetch and display blog posts. 
   The frontend is built with React and TypeScript, delivers a modern, responsive user experience, creating a powerful full stack solution for seamless content management and browsing.
    <br />
    <br />
    <a href="https://rainycityblog.vercel.app/">View Demo</a>
  </p>
</div>


### Built With

* React
* TypeScript
* Express
* MongoDB
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Get a free MongoDB UrI by following the steps at https://www.mongodb.com/docs/manual/reference/connection-string/
2. Clone the repo
   ```sh
   git clone https://github.com/jmacd87/RainyCityBlog
   ```
3. Install NPM packages
   ```sh
   npm install
   cd ./frontend
   npm install
   cd ./backend
   npm install
   ```
4. Enter your MONGODB UrI in backend `.env`
   ```js
   MONGODB_URI= 'ENTER YOUR URI'
   FRONTEND_URL=http://localhost:5173
   EMAIL_USER='ENTER YOUR EMAIL'
   EMAIL_PASS='ENtER YOUR EMAIL PASSWORD'
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
6. Run code locally
  ```sh
  run npm start from the project base and it will start both frontend and backend
  ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>






Commands:

Run npm install to install packages
npm start will start both the backend and frontend
