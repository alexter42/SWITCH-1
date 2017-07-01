import { FilesCollection } from 'meteor/ostrio:files';

const SwitchFiles = new FilesCollection({
  collectionName: 'switchFiles',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /csv|tab|xlsx/i.test(file.extension)) {
      return true;
    }
    return 'Please upload the file, with size equal or less than 10MB';
  },
});

export default SwitchFiles;
