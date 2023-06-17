# Microfront Javascript Ecommerce Application
This microfront end architecture is packaged with Webpack and Module Federation and hosted on AWS S3 as static website and served with cloudfront. 

- specialty of microfront application is, the whole application is divided into multiple microfront end services. These micro frontend can be written in any language/ any framework. When they are exported as Remote, it can be used inside any other javascript application just like packages or libraries.
- This application has a container application and 3 micro front end applications written in Vue and React.js Micro front end applications are developed and then packaged with webpack and babel, then exported as remote. 
- The 3 micro apps has to be deployed and live in order to be the container application appropriately work. 
- Continous Integration and Continous Development (CI/CD) with Github workflow is integrated.
- Code binary is pushed to aws S3 as static website, and from there it is accessible via CloudFront CDN.

About Application:
- Ecommerce application with authentication page, products page, add to cart page.
- There is a container application, which incorporates the auth, products, cart micro applications. 
