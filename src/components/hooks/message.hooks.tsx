import {useCallback} from 'react';

declare global {
  interface Window {
      M:any;
  }
}

export const useMessage = () => {
  return useCallback((text: string) => {
    if (window.M && text) {
      window.M.toast({ html: text })
    }
  }, [])
}