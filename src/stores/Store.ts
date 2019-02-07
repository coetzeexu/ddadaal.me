import { Container } from "unstated";

export default class Store<T extends object> extends Container<T> {
  afterHydration() {
    // can be overwritten
  }
}

export type StoreType<T extends object> = new(...args) => Store<T>;
