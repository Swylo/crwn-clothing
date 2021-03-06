import { all, call } from "@redux-saga/core/effects";

import { userSagas } from "./user/user.saga";
import { cartSagas } from "./cart/cart.saga";
import { shopSagas } from "./shop/shop.saga";

export default function* rootSaga() {
  yield all([call(userSagas), call(cartSagas), call(shopSagas)]);
}
