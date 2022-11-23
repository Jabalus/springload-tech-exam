import { required } from "./helpers/validations";

export const fields = [
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    rules: [ 
      {
        type: 'required',
      },
      {
        type: 'email',
      }
    ]
  },
]

