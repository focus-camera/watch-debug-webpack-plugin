'use strict';

export class WatchDebugWebpackPlugin {
	apply(compiler) {
		compiler.hooks.watchRun.tap('WatchRun', comp => {
			if(comp.modifiedFiled || comp.removedFiles) {
				console.log('[WDWP] Files changed:', comp.modifiedFiles);
				console.log('[WDWP] Files removed:', comp.removedFiles);
			} else {
				console.log('[WDWP] No files modified, initial run or watch disabled?');
			}
		});
	}
}
