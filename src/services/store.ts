import store from "store2";
import config from "config";
import { Types } from "modules/auth";

export const getSession = (): Types.IEntity.Tokens => store.get(config.api.sessionKEY) || {};

export const clearSession = () => store.remove(config.api.sessionKEY)!;

export const setSession = (tokens: Types.IEntity.Tokens) => store.set(config.api.sessionKEY, tokens);
