export const START_UPLOAD_QUERY = `mutation StartUpload($namespace: FileStorageNamespace!, $startUploadReqInput: StartUploadReqInput!) {
    startUpload(
      namespace: $namespace,
      startUploadReqInput: $startUploadReqInput
    ) {
      file_name
      file_path
      content_type
      method
      namespace
      operation
      size
      tags
      upload
      {
        expiry
        url
      }
    }
  }`;
export const COMPLETE_UPLOAD_QUERY = `mutation CompleteUpload($namespace: FileStorageNamespace!, $completeUploadReqInput: CompleteUploadReqInput!) {
    completeUpload(
        namespace: $namespace
        completeUploadReqInput: $completeUploadReqInput
    ) {
        file_name
        file_path
        content_type
        namespace
        size
        tags
        cdn {
            url
            absolute_url
            relative_url
        }
        upload {
            expiry
            url
        }
    }
}`;
//# sourceMappingURL=fileUploadQuery.js.map