const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const issueId = core.getInput('issue-id');
  const dirName = core.getInput('dir-name');
  const newBranch = `${issueId}-${dirName}`;
  console.log(`New Branch = ${newBranch}`);
  core.setOutput("branch-name", newBranch);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

