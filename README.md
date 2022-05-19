<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">SkyDropx</h3>

  <p align="center">
    An awesome Microservices request labels
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This is a microservice developed with hexagonal architecture which aims to generate travel labels, made for the company Skydropx, this process was divided into three parts to be handled in a simpler way.

The input for this microservice is an array with the specifications of where you want to send the package to where it goes, who sends and who receives with their respective information with this information.

1. An array of Buffers is generated that has the required Pdfs for the labels. 

2. From this information a packaging is generated in a Buffer of zip.

3. Finally this Buffer that packs the Pdfs is uploaded to S3 so that it can be downloaded at any time.

NOTE: these three steps are performed from a subprocess because this process needs to be asynchronous and could block the api, this is why a subprocess is launched to perform these 3 steps.

Translated with www.DeepL.com/Translator (free version)

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [AWS](https://aws.amazon.com/es/)
* [Docker](https://www.docker.com/)
* [Jest](https://jestjs.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow the steps below for setting up the project

### Installation

_Below is an example of how you can install and setting up The app._

1. Clone the repo
   ```sh
   https://github.com/jeffleon/Skydropx
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your enviroment variables `.env` see the `.env.sample`
   ```js
    database=sky_dropx
    user=root
    password=secret
    host=db
    accessKeyId=accesskeyexample
    secretAccessKey=secretkeyexample
    S3_Bucket=bucketexample
   ```
5. Run docker-compose up command
    ```
    docker compose up -d
    ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jefferson Leon - jeffersonleon1527@gmail.com

Project Link: [https://github.com/jeffleon/Skydropx](https://github.com/jeffleon/Skydropx)

<p align="right">(<a href="#top">back to top</a>)</p>
