const { defineConfig } = require("cypress");
const { merge } = require('mochawesome-merge');
const generate = require('mochawesome-report-generator');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Merge mochawesome reports after all tests are done
      on('after:run', async (results) => {
        const options = {
          files: [
            './mochawesome-report/*.json',
          ],
        };

        try {
          const report = await merge(options);
          console.log(report);
          await generate.create(report, {
            reportDir: 'mochawesome-report',
            reportFilename: 'mochawesome-report',
          });
          console.log('HTML report generated');
        } catch (error) {
          console.error('Error merging and generating mochawesome reports:', error);
        }
      });
    },
    baseUrl: 'https://zt.com.ua',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      overwrite: true,  // перезаписує існуючі звіти
      html: true,
      json: false,  // не створює JSON звіти
    }
  },
});
