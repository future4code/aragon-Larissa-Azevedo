export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToAdminPage = (navigate) => {
    navigate("/admin");
};

export const goToTripDetailsPage = (navigate, tripId) => {
    navigate(`/admin/${tripId}/details`);
}