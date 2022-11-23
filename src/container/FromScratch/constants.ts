import { required } from "../../helpers/form";

export const fields = [
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    rules: [ 
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
        type: 'minLen',
        length: 8,
        message: 'must be longer than 8 characters'
      }
    ]
  },
  {
    key: 'colour',
    type: 'singleselect',
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
  },
  {
    key: 'animals',
    type: 'multiselect',
    label: 'Animals',
    options: [
      {
        key: "Bear",
        label: "Bear",
        value: "Bear",
      },
      {
        key: "Tiger",
        label: "Tiger",
        value: "Tiger",
      },
      {
        key: "Snake",
        label: "Snake",
        value: "Snake",
      },
      {
        key: "Donkey",
        label: "Donkey",
        value: "Donkey",
      },
    ]
  },
]

export const tigerObj = {
  key: 'tigerType',
  type: 'text',
  label: 'Type of Tiger',
  rules: [ 
    {
      type: 'custom',
      validate: (formValues: any, key: string, message?: string) => {
        if (formValues.animals && formValues.animals.includes('Tiger')){
          if (formValues[key]) {
            return undefined;
          }

          return "required";
        }
        return undefined;
      }
    }
  ]
}