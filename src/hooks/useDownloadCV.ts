import { useCallback } from "react";

export const useDownloadCV = () => {
  return useCallback(() => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1Kb1dzbOli2npQ52kdhbbXcvxp4b-B0ze";
    link.download = "CV_Yoriel_Carvajalino.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);
};
