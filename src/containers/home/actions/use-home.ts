import { useRouter } from "next/navigation";
import { useLayoutContext } from "@/components/hooks/use-layout-context/use-layout-context";

export const useHome = () => {
  const { cubeRef } = useLayoutContext();
  const router = useRouter();

  const handleNextPage = () => {
    router.push("/tutorial");
  };

  return {
    handleNextPage,
    cubeRef,
  };
};
