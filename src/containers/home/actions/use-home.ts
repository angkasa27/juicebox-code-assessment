import { useRouter } from "next/navigation";
import { useContext, } from "react";
import { LayoutContext } from "@/app/(main)/layout";

export const useHome = () => {
  const { cubeRef } = useContext(LayoutContext);
  const router = useRouter();

  const handleNextPage = () => {
    router.push("/tutorial");
  };

  return {
    handleNextPage,
    cubeRef,
  };
};
