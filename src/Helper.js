const Helpers = {
  httpRequest: (url, method, payload, headers) => {
      const config = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
      if (method.toLowerCase() === 'post' &&  payload && payload.length > 0) {
      config.body = JSON.stringify(payload);
    }

    if (headers && typeof headers === 'object' && Object.keys(headers).length > 0) {
      config.headers = headers;
    }

    return fetch(
      url,
      config
    ).then((response) => {
      if (response.ok) {
        let data = response;
                  if (response.headers.get('Content-Type').indexOf('application/json') > -1) {
          data = response.json();
        }
        return data;
      }
        return Promise.reject(response);
    });
  },  
};

export default Helpers;