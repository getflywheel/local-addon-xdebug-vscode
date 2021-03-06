import * as path from 'path';
import * as fs from 'fs-extra';
import * as Local from '@getflywheel/local';

/**
 * Adds the vscode xdebug configuration for the site.
 *
 * @param site
 * @param serverUuid
 */
export default async function addWorkspaceJSON (site: Local.Site, serverUuid: string) {

    const vscodeJSON = `{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Listen for XDebug",
			"type": "php",
			"request": "launch",
			"port": 9000
		},
		{
			"name": "Launch currently open script",
			"type": "php",
			"request": "launch",
			"program": "\${file}",
			"cwd": "\${fileDirname}",
			"port": 9000
		}
	]
}`;

console.log( site.paths );

	await fs.ensureDir(path.join(site.longPath, '.vscode'));

    await fs.writeFile(path.join(site.longPath, '.vscode', 'launch.json'), vscodeJSON);
}




