import SwitchFiles from '../../collections/switchFiles';
import Users from '../../collections/users';

export default function saveSwitchFile(root, { switchFile }) {
  console.log('llamada mutacion');
  const userId = Users.findOne()._id;
  console.log(userId);
  SwitchFiles.addFile(switchFile.path, {
    fileName: 'sample.png',
    fileId: 'abc123AwesomeId',
    meta: {},
  });
  return Users.findOne();
}
