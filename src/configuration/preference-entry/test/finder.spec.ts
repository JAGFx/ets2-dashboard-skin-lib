import {
  existingConfigurationId,
  expectedPreferenceEntry,
  unknownPreferenceEntryId
} from './finder.mock';

import { findPreferenceEntryById } from '../finder';

describe('Preference entries finder', () => {
  it('Test', () => expect(true).toBeTruthy());
  it('An existing preference entry must return data successfully', () => {
    expect(findPreferenceEntryById(existingConfigurationId)).toMatchObject(
      expectedPreferenceEntry
    );
  });

  it('An unknown preference entry must thrown an exception', () => {
    expect(() =>
      findPreferenceEntryById(unknownPreferenceEntryId)
    ).toThrowError(
      `Unable to find ${unknownPreferenceEntryId} on preference entries list`
    );
  });
});
