<h1>Angular web SPA </h1>

This is a single page web application developed in Angular which invokes the JSON endpoint upon startup and parses it accordingly.

<h2>Description</h2>

<p>To develop this application I utilised the Angular framework. The FormData Class represents the model object that we will parse from JSON response of the provided URL. </p>
<p>FormDataService is the class that creates FormData object querying the server. The getFormData method returns a promise with an object of type FormData. The promise is necessary to get data asynchronously.</p>
<p>AppComponent is the entry point of the application. It implements the onInit interface so it will call getFormData() when the application is opened. GetFormData() calls the service (which returns a promise) and then assigns the service result to the formData property of the AppComponent class.</p>
<p>The view is located in the partials/app.html file. It represents the responsive visual structure of the model and is developed utilising Bootstrap framework. </p>

<h2>Update:</h2>
<h4>4/11/2017</h4>
Drag and drop functionality implemented utilising the ng2-dnd library from https://github.com/akserg/ng2-dnd.
