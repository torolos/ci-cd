const core = require('@actions/core');

try {
  const name = core.getInput('test-project');
  const count = parseInt(core.getInput('message-count'));
  for (let i=0; i<count; i++){
    console.log(`${name} - ${count}`)
  }
} catch (error) {
  core.setFailed(error.message);
}