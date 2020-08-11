import createContext from "./createContext";
import festivalsApi from "../api/festivalsApi";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_data":
      return { errorMessage: null, data: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const organiseData = (data) => {
  let organisedData = [];
  data.map((festival) => {
    festival.bands.map((band) => {
      const bandObject = {
        name: band.name,
        festivals: festival?.name,
      };

      if (!band.recordLabel) band.recordLabel = "No Label";

      const labelObject = { name: band.recordLabel, bands: [bandObject] };
      const labelNames = organisedData.map((label) => label.name);
      
      if (labelNames.includes(band.recordLabel)) {
        const labelFoundObject = organisedData.find(
          (label) => label.name === band.recordLabel
        );
        const labelFoundIndex = organisedData.findIndex(
          (label) => label.name === band.recordLabel
        );
        labelFoundObject.bands.push(bandObject);
        organisedData.splice(labelFoundIndex, 1);
        organisedData.push(labelFoundObject);
      } else {
        organisedData.push(labelObject);
      }
    });
  });
  organisedData.sort((a, b) => a.name.localeCompare(b.name))
  return organisedData;
};

const loadData = (dispatch) => async () => {
  const response = await festivalsApi
    .get("/api/v1/festivals", {})
    .catch((error) => {
      dispatch({
        type: "add_error",
        payload: `Error returned ${error.response.status}`,
      });
    });
  if (response?.data) {
    const myData = organiseData(response.data);
    dispatch({ type: "add_data", payload: myData });
  } else {
    dispatch({
      type: "add_error",
      payload: `No data returned`,
    });
  }
};

export const { Provider, Context } = createContext(
  reducer,
  { loadData },
  { data: null, errorMessage: null, labels: [] }
);
