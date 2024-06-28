const core = require('@actions/core');
//const github = require('@actions/github');
const exec = require('@actions/exec');


function run() {
   //getting inputs 
   const bucket = core.getInput('bucket', { required: true });
   const bucketRegion = core.getInput('bucket-region', { required: true });
   const distFolder = core.getInput('dist-folder', { required: true });

   //upload files
   const s3Uri = `s3://${blucket}`
   exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

   core.notice('Hello from my custom java script action!');

}

run();
