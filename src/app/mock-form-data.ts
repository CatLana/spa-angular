import { FormData } from './form-data';

export const FORMDATA: FormData = {
    userId: 123,
    formId: 'VC01',
    form: [
        { id: 'F01', caption: 'Sighting', type: 'date' },
        { id: 'F02', caption: 'Ship Name', type: 'text' },
        { id: 'F03', caption: 'Friendliness', type: 'number' },
        { id: 'F04', caption: 'Smartness', type: 'number' },
        { id: 'F05', caption: 'Description', type: 'number' }
    ],
    lastChangedDate: new Date ('2017-10-30T17:23:43+00:00'),
    lastChangedBy: 'Paddy'
};
