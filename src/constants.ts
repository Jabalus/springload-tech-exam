import { required } from "./helpers/form";

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
  {
    key: 'Password',
    type: 'password',
    label: 'Password',
    rules: [ 
      {
        type: 'required',
      },
      {
        type: 'minLen',
        length: 8,
        message: 'must be longer than 8 characters'
      }
    ]
  },
  {
    key: 'colour',
    type: 'multiselect',
    label: 'Colour',
    options: [
      {
        key: "Blue",
        label: "Blue",
        value: "Blue",
      },
      {
        key: "Green",
        label: "Green",
        value: "Green",
      },
      {
        key: "Red",
        label: "Red",
        value: "Red",
      },
      {
        key: "Black",
        label: "Black",
        value: "Black",
      },
      {
        key: "Brown",
        label: "Brown",
        value: "Brown",
      },
    ]
  }
]

