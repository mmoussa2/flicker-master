# README
# Fliker
## Background and Overview
  Fliker is a web application, User can upload and delete images, post comments of other user's image  
  
 
  
## Technologies:
  - Ruby on Rails
  - React/Redux
  - Javascript
  - Ajax
  - CSS
  - PostgreSQL 
  
  
  
One of the challenges of front end auth make the application to render in an initial state that reflects the status of the session, to avoid render a non-logged because the application always render with the default application state, so i used bootstrapping by adding a script tag to add a a current logged in user and passing it as preloadedState and configured the store to use a preloadedState.
    
   ```
    
  <% if logged_in? %>
   <script type="text/javascript">
      window.currentUser =
        <%= render("api/users/user.json.jbuilder", user: current_user).html_safe %>
   </script>
 <% end %>
 
 
 
 document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
 
});
  

   ```
