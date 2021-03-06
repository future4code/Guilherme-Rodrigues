export const goToAdmPage = (history) => {
    history.push("/admin/trips/list");
  };

export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToCreateTripPage = (history) => {
  history.push("/admin/trips/create");
};

export const goToTripDetailsPage = (history, id) => {
  history.push("/admin/trip/"+id);
};
  
export const goToUserPage = (history) => {
  history.push("/trips/list");
};
  
export const goToApplicationFormPage = (history) => {
  history.push("/trips/application");
};

export const goToHomePage = (history) => {
  history.push("/");
};
    
export const goToLastPage = (history) => {
  history.goBack();
};