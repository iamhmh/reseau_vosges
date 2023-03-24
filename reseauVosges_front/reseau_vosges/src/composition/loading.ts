import { ref } from "vue";

export const useLoad = () => {
  const loading = ref(false);

  const setLoading = (value: boolean) => (loading.value = value);

  return { loading, setLoading };
};

export const useLoading = (handler: () => void) => {
  const { loading, setLoading } = useLoad();

  const launch = async () => {
    try {
      setLoading(true);
      await handler();
    } finally {
      setLoading(false);
    }
  };

  return { loading, launch };
};