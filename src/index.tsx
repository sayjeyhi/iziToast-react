import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";

import { IziToastSettings } from './types';

export const useToast = (config: IziToastSettings) => {
  return () => {
    console.log('called with : ' , config);
    iziToast.show(config)
  };
};
