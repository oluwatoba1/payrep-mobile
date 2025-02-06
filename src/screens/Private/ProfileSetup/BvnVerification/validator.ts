import { useState } from 'react';
import * as z from 'zod';

interface Form {
    bvn: string;
}

const useBvnVerificationValidation = () => {
    const [bvn, setBvn] = useState<string>('');

    // Validation schemas
    const bvnValidationSchema = z.object({
        bvn: z.string().regex(/\d{11}$/, { message: "Enter a valid bvn" })
    });

    const formData = {
        bvn,
    };

    const [formErrors, setFormErrors] = useState<Form>({ bvn: '' });

    const validateForm = (cb: Function) => {
        try {
            bvnValidationSchema.parse(formData);
            setFormErrors({ bvn: '' });
            cb();
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors: Record<keyof Form, string> = { bvn: '' };
                error.errors.forEach(err => {
                    const field = err.path[0];
                    const message = err.message;
                    errors[field as keyof Form] = message;
                });
                setFormErrors(errors);
            }
        }
    };

    const clearFormError = (key: string) =>
        setFormErrors(errors => ({ ...errors, [key]: '' }));

    return {
        formData,
        formErrors,
        clearFormError,
        validateForm,
        setBvn,
    };
};

export default useBvnVerificationValidation;
