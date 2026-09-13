export enum FormSubmissionStatus {
  Initial,
  Submitting,
  Success,
  Duplicate,
  TfCertInvalid,
  Rejected,
  Error,
}

export type ObserverFormContextType = {
  isBelowForm: boolean
  setIsBelowForm: (isBelowForm: boolean) => void
}
