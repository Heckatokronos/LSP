# simple-podcastAPI

## Routes (you can also check that in console by 'rails routes'):
<table id='route_table' class='route_table'>
  <thead>
    <tr>
      <th>Helper</th>
      <th>HTTP Verb</th>
      <th>Path</th>
      <th>Controller#Action</th>
    </tr>
  </thead>
  <tbody class='exact_matches' id='exact_matches'>
  </tbody>
  <tbody class='fuzzy_matches' id='fuzzy_matches'>
  </tbody>
  <tbody>
    <tr class='route_row' data-helper='path'>
  <td data-route-name='api_v1_posts'>
      api_v1_posts<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/api/v1/posts(.:format)'>
    /api/v1/posts(.:format)
  </td>
  <td>
    <p>api/v1/posts#index</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    POST
  </td>
  <td data-route-path='/api/v1/posts(.:format)'>
    /api/v1/posts(.:format)
  </td>
  <td>
    <p>api/v1/posts#create</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='api_v1_post'>
      api_v1_post<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/api/v1/posts/:id(.:format)'>
    /api/v1/posts/:id(.:format)
  </td>
  <td>
    <p>api/v1/posts#show</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PATCH
  </td>
  <td data-route-path='/api/v1/posts/:id(.:format)'>
    /api/v1/posts/:id(.:format)
  </td>
  <td>
    <p>api/v1/posts#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PUT
  </td>
  <td data-route-path='/api/v1/posts/:id(.:format)'>
    /api/v1/posts/:id(.:format)
  </td>
  <td>
    <p>api/v1/posts#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    DELETE
  </td>
  <td data-route-path='/api/v1/posts/:id(.:format)'>
    /api/v1/posts/:id(.:format)
  </td>
  <td>
    <p>api/v1/posts#destroy</p>
  </td>
</tr>
  </tbody>
</table>

## validation for form:

* all params must be exist! (title, body, author, file)
* minimum length of author - 4
* minumum length of body - 10

## validation of file:

* file size must be lesser than 100 MB
* file extentions only '.mp3', '.mp4', '.wav'
* MIME_TYPE must be [audio/mpeg] (audio formats)

