import { store } from "../redux/store";
import { setname1 } from "../redux/slices/name1-Slice";

function AnotherClick() {
  store.dispatch(setname1("tomtom"));
}

export { AnotherClick };
