import axios from "axios";

export let postAPI = (formData, message) => {
  axios
    .post("https://66015d8587c91a11641aaeb4.mockapi.io/users", formData)
    .then(() => {
      alert(message);
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to send data. Please try again later.");
    });
};

export let updateAPI = (formData, message) => {
  axios
    .put(
      `https://66015d8587c91a11641aaeb4.mockapi.io/users/${formData.id}`,
      formData
    )
    .then(() => {
      alert(message);
    })
    .catch((err) => {
      console.log(err);
    });
};

export let deleteAPI = (id, getData) => {
  axios
    .delete(`https://66015d8587c91a11641aaeb4.mockapi.io/users/${id}`)
    .then(() => {
      getData();
    });
};

export let getAPI = (setApiData) => {
  axios
    .get(`https://66015d8587c91a11641aaeb4.mockapi.io/users`)
    .then((res) => {
      setApiData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
