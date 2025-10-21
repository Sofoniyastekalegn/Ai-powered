import type { KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from '../ui/button';



export type ChatFormData = {
    prompt: string;

}

type Props = {
    onSubmit: (data: ChatFormData) => void;


};


