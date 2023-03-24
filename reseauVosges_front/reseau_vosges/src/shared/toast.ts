import { useToast } from 'vue-toastification';

const toaster = useToast();

export const successToast = (message: string) => {
    toaster.success(message);
};

export const errorToast = (message: string) => {
    toaster.error(message);
};