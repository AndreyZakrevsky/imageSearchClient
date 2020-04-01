import ua from './ua'
import ru from './ru'
import en from './en'

let locails = {
  "ru": ru,
  "en": en,
  "ua": ua,
};


export default function localizeFilter(key) {
 let localize = '';

  if (process.client) {
    localize = localStorage.getItem("locale") || "en";
  }else{
    localize = "ru";
  }

  return locails[localize][key];
};
