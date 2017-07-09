export default function graphqlServerExpressUpload() {
  return function uploadMiddleware(req, res, next) {
    if (!(req.method === 'POST' && req.is('multipart/form-data'))) {
      return next();
    }
    const files = req.files;
    const body = req.body;
    const variables = JSON.parse(body.variables);
    files.forEach(file => {
      const name = file.fieldname;
      const mappedFile = {
        name: file.originalname,
        type: file.mimetype,
        size: file.size,
        buffer: file.buffer,
      };
      if (!variables[name]) {
        variables[name] = mappedFile;
      } else if (variables[name].constructor === Array) {
        variables[name].push(mappedFile);
      } else {
        variables[name] = [variables[name], mappedFile];
      }
    });
    req.body = {
      operationName: body.operationName,
      query: body.query,
      variables,
    };
    return next();
  };
}
