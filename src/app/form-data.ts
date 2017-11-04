// Describe the structure of the objects 
export class FormData {
    userId: number;
    formId: string;
    form: FormItem[];
    lastChangedDate: Date;
    lastChangedBy: string;
}

export class FormItem {
    id: string;
    caption: string;
    type: string;
}
