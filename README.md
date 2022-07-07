<p align="center">
  <font size="5"><strong>Horizons</strong></font><br/>
  <strong>CMPT 354</strong><br/>
  <code>Created By: Alex Lazcano, Alex Wang, Sahba Hajihoseini</code></br>
</p>

---

## Technologies
### Front end:

<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height=129 />

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height=120 />
</p>    

### Back end:


<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" height=120 />

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height = 120 />


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height= 120 />
</p>


## Set Up

### Client

<code>yarn install</code> to install dependencies

### Server
<ol>
  <li><code>yarn install</code> to install dependencies</li>
  <li>
      Set up mysql and make sure it is running. Make note of password used when creating mysql login.
  </li>
  <li>
    In a .env file in root of server folder, place <code>DB_PASSWORD="{password for SQL}"</code> 
  </li>
  <li>
    In a .env file in root of server folder, place <code>DB_Name="{database name for SQL}"</code> 
  </li>
  <li>
    if needed <code>Port={port number for backend server}</code>. <br>Default is 3001.
  </li>
</ol>
  
## Usage
### Both
To run both client and server use:
<code>yarn start</code>
in .../Horizons/client


### Client
To run client use:
<code>yarn start</code>

Runs on localhost:3000

### Server
To run client use:
<code>yarn start</code>

Uses nodemon so you if changes occur to server it will automatically restart. 
 





