# 1-Scripts for test/start/build
- prettier: npm run prettier
- lint: npm run lint
- Build: npm run build
- Run unit tests: npm run test
- Start server: npm run start

# 2- Endpoint to resize images
http://localhost:3000/image/resize?name=fjord&width=200&high=200

- name: image name in file assets/full expamle " encenadaport, fjord, icelandwaterfall, palmtunnel, santamonica. "
- width: positive number it will represent as pixel 
- high:  positive number it will represent as pixel 

# 3- Functionalities

- # If user pass url with wrong image name he will see a warning says:
    - "Image`s Name Not Exsist in images File! ❌ vailable images are and sort images name that exist" 
    - Example: http://localhost:3000/image/resize?name=ffff&width=100&high=100

- # If user pass url without width & high & image name he will see a warning says:
    - "Please assign Image`s Name & Width & Hight 🗣" 
    - Example:  http://localhost:3000/image/resize/

- # If user pass url without width & high he will see a warning says:
    - "Please assign Image`s Width ↔️ & Hight ↕️"
    - Example: http://localhost:3000/image/resize?name=fjord"

- # If user pass url without width or put negative value he will see a warning says:
    - "Image`s Width must assigned and be Postive ↔️"
    - Example: http://localhost:3000/image/resize?name=fjord&width=-100&high=100"
    - Example: http://localhost:3000/image/resize?name=fjord&high=100"

- # If user pass url without high or put a negative value he will see a warning says:
    - "Image`s high must assigned and be Postive ↕️"
    - Example: http://localhost:3000/image/resize?name=fjord&width=100&high=-100"
    - Example: http://localhost:3000/image/resize?name=fjord&width=100"