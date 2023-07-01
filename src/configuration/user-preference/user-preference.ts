import userPreferenceDev from './user-preference.dev.json';
import {
  UserPreference,
  UserPreferenceCollection,
  UserPreferenceId,
  UserPreferenceValue
} from './user-preference.type';

export const findUserPreference = (
  id: UserPreferenceId,
  userPreferences: UserPreferenceCollection
): UserPreference => {
  if (!userPreferences.has(id)) {
    throw new Error(
      `Unable to find the given "${id}" user preference: Not found`
    );
  }

  return userPreferences.get(id) as UserPreference;
};

export const updateUserPreference = (
  id: UserPreferenceId,
  value: UserPreferenceValue,
  userPreferences: UserPreferenceCollection,
  useFakeData = false
): Promise<UserPreference> => {
  const existing = findUserPreference(id, userPreferences);

  existing.value = value;

  if (useFakeData) {
    return new Promise<UserPreference>((resolve) => {
      setTimeout(() => {
        resolve(existing);
      }, 1000);
    });
  }

  return new Promise<UserPreference>((resolve) => {
    resolve(existing);
  });
};

export const getUserPreferences = (useFakeData = false) => {
  if (useFakeData) {
    return new Promise<UserPreferenceCollection>((resolve) => {
      resolve(UserPreferenceCollection.fromArray(userPreferenceDev));
    });
  }

  return new Promise<UserPreferenceCollection>((resolve) => {
    resolve(UserPreferenceCollection.fromArray([]));
  });
};

export const validateUserPreferenceFileUploaded = (file: File): void => {
  if (file.type !== 'application/json') {
    throw 'Invalid file type';
  }
};

export const uploadUserPreferenceFile = (
  file: File,
  useFakeData = false
): Promise<UserPreferenceCollection> => {
  if (useFakeData) {
    return new Promise<UserPreferenceCollection>((resolve) => {
      setTimeout(() => {
        validateUserPreferenceFileUploaded(file);

        resolve(UserPreferenceCollection.fromArray(userPreferenceDev));
      }, 1000);
    });
  }

  return new Promise<UserPreferenceCollection>((resolve) => {
    resolve(new UserPreferenceCollection());
  });
};
