import React, { useEffect, useState, useContext } from "react";
import {
  Link,
  useLocation,
  useParams,
  matchRoutes,
  useNavigate,
} from "react-router-dom";
import ArLocalization from "./ArLocalization.json";
import EnLocalization from "./EnLocalization.json";

export default function useLocalizer() {
  const params = useParams();
  let navigate = useNavigate();

  const getKey = (ArString, EnString) => {
    try {
      if (!EnString) return ArString;

      return params.lid == "ar" ? ArString : EnString;
    } catch {
      return ArString;
    }
  };
  const getLang = () => {
    try {
      return "/" + params.lid;
    } catch {
      return "/ar";
    }
  };
  const ChangeLanguage = () => {
    if (params.lid == "ar") return "/en";
    else return "/ar";
  };

  const getJsonKey = (Key) => {
    try {
      return params.lid == "ar" ? ArLocalization[Key] : EnLocalization[Key];
    } catch {
      return ArLocalization[Key];
    }
  };

  return { getKey, getJsonKey, getLang, ChangeLanguage };
}
