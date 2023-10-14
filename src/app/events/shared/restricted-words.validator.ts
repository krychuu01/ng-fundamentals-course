import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const RESTRICTED_WORDS: string[] = ['foo', 'bar']
export function restrictedWordsValidator(restrictedWords: string[]): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    if (!control) return null;

    const invalidWords = RESTRICTED_WORDS
      .map(restrictedWord => control.value.includes(restrictedWord) ? restrictedWord : null)
      .filter(restrictedWord => restrictedWord != null);

    return invalidWords && invalidWords.length > 0
      ? {restrictedWords: invalidWords.join(', ')}
      : null;
  }

}
