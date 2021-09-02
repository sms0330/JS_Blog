const BASE_URL = 'http://localhost:3000/api/v1';

export const Post = {
  index() {
    return fetch(`${BASE_URL}/posts`).then(response => {
      console.log(response);
      return response.json();
    });
  },
  create(params) {
    return fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(res => res.json());
  },
  show(id) {
    return fetch(`${BASE_URL}/posts/${id}`).then(res => res.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(res => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  },
};

export const Comment = {
  create(params) {
    return fetch(`${BASE_URL}/posts/${params.post_id}}/comments`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(res => res.json());
  },
  destroy(post_id, id) {
    return fetch(`${BASE_URL}/posts/${post_id}/comments/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  },
};


//Sign In AJAX Helper
export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: 'POST',
      credentials: 'include', //need for cookies to be allowed to be sent cross-origin
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(res => res.json());
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(res => res.json());
  },
};

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: 'include',
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: params }),
    }).then(res => res.json());
  },
};