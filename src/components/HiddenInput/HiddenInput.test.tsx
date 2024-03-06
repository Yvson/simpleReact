// React
import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { FormProvider, useForm } from "react-hook-form";

// Components
import { HiddenInput, TBaseInputProps } from './HiddenInput';


describe('HiddenInput component', () => {

    const mockInput: TBaseInputProps = {
        definition: {
            name: 'offer-input-name',
            label: 'offer-input-label',
            default: 'default',
            required: true,
        }
    }

    it('verifies the default value of the form', async () => {

        const { result } = renderHook(() => useForm({
            defaultValues: {
                'offer-input-name': 'default'
            }
        }));

        render(
            <FormProvider {...result.current}>
                <HiddenInput definition={mockInput.definition}/>
            </FormProvider>
        );

        const inputTextField = screen.getByTestId('textField');

        expect(inputTextField).toBeInTheDocument();

        expect(inputTextField).toHaveValue(mockInput.definition.default);

    });

    it('verifies changes in form value', async () => {

        const { result } = renderHook(() => useForm());

        render(
            <FormProvider {...result.current}>
                <HiddenInput definition={mockInput.definition}/>
            </FormProvider>
        );

        const inputTextField = screen.getByTestId('textField');

        fireEvent.change(inputTextField, { target: { value: 'new value form' } });

        expect(inputTextField).toBeInTheDocument();

        await waitFor(() => {
            expect(result.current.watch('offer-input-name')).toEqual('new value form');
        });

    });

    it('changes input value', async () => {

        const { result } = renderHook(() => useForm({
            defaultValues: {
                'offer-input-name': 'default'
            }
        }));

        render(
            <FormProvider {...result.current}>
                <HiddenInput definition={mockInput.definition}/>
            </FormProvider>
        );

        const inputTextField = screen.getByTestId('textField');

        fireEvent.change(inputTextField, { target: { value: 'new text' } });

        expect(inputTextField).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByTestId('textField')).toHaveValue('new text');
        });

    });

});