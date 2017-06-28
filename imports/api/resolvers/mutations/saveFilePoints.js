import Points from '../../collections/points';
import Users from '../../collections/users';

export default function saveFilePoints(root, { pointsFile }) {
  const userId = Users.findOne()._id;
  console.log(userId);

  Points.addFile(pointsFile.path, {
    fileName: pointsFile.name,
    meta: {},
  });

  return Users.findOne();
}
