import * as React from 'react'

interface IInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  name: string
  errorMessage?: string
  inputContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
  errorContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
  errorTextProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

const FC: React.FC<IInputProps> = ({
  name,
  label,
  errorMessage,
  inputContainerProps,
  labelProps,
  errorContainerProps,
  errorTextProps,
  ...restInputProps
}) => {
  return (
    <div className="input-container" {...inputContainerProps}>
      {!!label && (
        <label className="input-label" htmlFor={name} {...labelProps}>
          {label}
        </label>
      )}
      <div className="input-inner-container">
        <input className="input" name={name} {...restInputProps} />
        {!!errorMessage && (
          <div className="error-container" {...errorContainerProps}>
            <div className="error-text" {...errorTextProps}>
              {errorMessage}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { FC as Input }
