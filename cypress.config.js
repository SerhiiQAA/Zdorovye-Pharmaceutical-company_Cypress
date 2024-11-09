const { defineConfig } = require("cypress");
const { merge } = require('mochawesome-merge');
const generate = require('mochawesome-report-generator');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Merge mochawesome reports and generate HTML after all tests are done
      on('after:run', async (results) => {
        const options = {
          files: [
            './mochawesome-report/*.json',
          ],
        };

        try {
          const report = await merge(options);
          console.log('Merged report:', report);
          await generate.create(report, {
            reportDir: 'mochawesome-report',
            reportFilename: 'mochawesome-report',
          });
          console.log('HTML report generated');

          // Видалення JSON файлів після генерації HTML звіту
          fs.readdir('mochawesome-report', (err, files) => {
            if (err) throw err;
            for (const file of files) {
              if (path.extname(file) === '.json') {
                fs.unlink(path.join('mochawesome-report', file), err => {
                  if (err) throw err;
                });
              }
            }
          });

        } catch (error) {
          console.error('Error merging and generating mochawesome reports:', error);
        }
      });
    },
    baseUrl: 'https://zt.com.ua',
  },
});
