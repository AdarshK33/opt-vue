import Cookies from "js-cookie";
const cookieparser = process.server ? require("cookieparser") : undefined;

// if (typeof window !== "undefined") Cookie = Cookie;

export const clearCookie = (key, ctx) => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    ctx && ctx.res.clearCookie(key);
    // return ctx && ctx.req && ctx.req.headers && ctx.req.headers.cookie[key]
    //   ? ctx.req.headers.cookie[key]
    //   : undefined;
    Cookies.remove(key);
    return undefined;
  } else {
    Cookies.remove(key);
  }
};

export const getCookie = (key, ctx) => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    let cookies = ctx
      ? ctx && ctx.req && ctx.req.headers && ctx.req.headers.cookie
      : "";
    if (
      (ctx && ctx.req && ctx.req.headers && ctx.req.headers.cookie) !==
      ("" || undefined)
    ) {
      cookies = cookies
        .split(";")
        .map(v => v.trim())
        .filter(v => v.split("=")[0] == "user");

      cookies =
        cookies &&
        (typeof cookies[0] !== "string" ? "" : cookieparser.parse(cookies[0]));
    }
    return cookies;
  } else {
    // browser
    return Cookies.get(key);
  }
};

export const setCookie = (name, data, options, ctx) => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    if (ctx) {
      ctx.res.cookie(name, data, options);
      return ctx.req && ctx.req.cookies[name] ? ctx.req.cookies[name] : data;
    }
  } else {
    Cookies.set(name, data, options);
  }
};
