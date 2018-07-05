// @flow

export type FieldError = {
  field: string;
  message: string;
}

export type Rules = {
  [string]: (input: string) => boolean,
}

export type FieldLabels = {
  [string]: string
}

export type FieldErrors = {
  [string]: string
}

export type Values = {
  [string]: string
}

export default class Form {
  _values: Values;
  _errors: FieldErrors;

  constructor(props: any) {
    this._values = props;
    this._errors = {};
  }

  updateValues(props: any): Form {
    this._values = {
      ...this.values,
      ...props
    };
    return this;
  }

  get values(): Values {
    return this.keys.reduce((memo, field) => ({
      ...memo,
      [field]: this._values && this._values[field] ? this._values[field] : ''
    }), {});
  }

  get payload(): Values {
    return this.keys.filter((key) => this.values[key] != null).reduce((memo, key) => ({
      ...memo,
      [key]: this.values[key]
    }), {});
  }

  get keys(): Array<string> {
    return [];
  }

  get rules(): Rules {
    return {};
  }

  get fieldLabels(): FieldLabels {
    return {};
  }

  get errors(): FieldErrors {
    return this._errors;
  }

  get hasErrors(): boolean {
    return Object.keys(this._errors).length > 0;
  }

  validate(): void {
    this._errors = Object.keys(this.values).reduce((memo, key) => {
      const value = this.values[key];
      if (this.rules[key] && !this.rules[key](value)) {
        return {
          ...memo,
          [key]: `Please enter a valid ${this.fieldLabels[key]}`
        };
      }
      return memo;
    }, {});
  }
}
