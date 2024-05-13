import type { ValidationConfigurations } from "@warlock.js/core";
import {
  ArrayOfRule,
  ArrayRule,
  BooleanRule,
  ConfirmedRule,
  DateRule,
  EmailRule,
  FileRule,
  FloatRule,
  InRule,
  IntRule,
  LengthRule,
  LocalizedRule,
  MaxLengthRule,
  MaxRule,
  MinLengthRule,
  MinRule,
  NumberRule,
  ObjectRule,
  RequiredIfRule,
  RequiredRule,
  RequiredWithAllRule,
  RequiredWithRule,
  ScalarRule,
  StringifyRule,
  StringRule,
  UniqueRule,
  UploadableRule,
  UrlRule,
} from "@warlock.js/core";

const validationConfigurations: ValidationConfigurations = {
  stopOnFirstFailure: true,
  returnErrorStrategy: "first",
  responseStatus: 400,
  rules: {
    unique: UniqueRule,
    requiredIf: RequiredIfRule,
    required: RequiredRule,
    localized: LocalizedRule,
    string: StringRule,
    object: ObjectRule,
    confirmed: ConfirmedRule,
    in: InRule,
    min: MinRule,
    max: MaxRule,
    minLength: MinLengthRule,
    length: LengthRule,
    maxLength: MaxLengthRule,
    email: EmailRule,
    int: IntRule,
    requiredWith: RequiredWithRule,
    requiredWithAll: RequiredWithAllRule,
    float: FloatRule,
    number: NumberRule,
    arrayOf: ArrayOfRule,
    array: ArrayRule,
    bool: BooleanRule,
    boolean: BooleanRule,
    url: UrlRule,
    date: DateRule,
    uploadable: UploadableRule,
    scalar: ScalarRule,
    stringify: StringifyRule,
    file: FileRule,
  },
  keys: {
    response: "messages",
    inputKey: "key",
    inputError: "error",
    inputErrors: "errors",
  },
};

export default validationConfigurations;
